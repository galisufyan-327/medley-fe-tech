import React, { useCallback, useEffect, useMemo } from 'react'
import PayoutList from '../../components/PayoutList'
import Header from '../../components/Header';
import { HeadingTwo, Container, FlexContainer } from './styles';
import PayoutServie from '../../services/modules/payout';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import { MetaData } from '../../interfaces/payout';
import SearchInput from '../../components/SearchInput';
import debounce from 'lodash.debounce'

const Payout: React.FC = () => {
  const [payouts, setPayouts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [metaData, setMetaData] = React.useState<MetaData>({
    limit: 10,
    totalCount: 0
  })

  const fetchPayouts = useCallback(async (page: number = 1) => {
    setLoading(true);

    try {
      const params = {
        limit: metaData.limit,
        page,
      }

      const response = await PayoutServie.getPayouts(params)
      const { data, metadata } = response.data

      setPayouts(data)
      const calculatedTotalPages = Math.ceil(metadata.totalCount / metaData.limit);
      setMetaData({ ...metadata, totalPage: calculatedTotalPages })
    } catch (error) {
      setPayouts([])
      console.log('Error: while fetching payouts', error)
    } finally {
      setLoading(false);
    }
  }, [metaData])

  const searchPayouts = useCallback(async (searchValue: string) => {
    setLoading(true);
    try {
      const response = await PayoutServie.searchPayouts({ query: searchValue });
      const searchData = response.data;

      setPayouts(searchData);

      const calculatedTotalPages = Math.ceil(searchData.length / metaData.limit);
      setMetaData({ ...metaData, totalPage: calculatedTotalPages - 1, page: 1 });

    } catch (error) {
      setPayouts([]);
      console.log('Error: while searching payouts', error);
    } finally {
      setLoading(false);
    }
  }, [metaData]);

  const onPageChange = useCallback((page: number, value?: string) => {
    if (page > 1 && value) {
      setMetaData(prevData => ({ ...prevData, page }))
      return; 
    }

    if (value) {
      searchPayouts(value)
    } else {
      fetchPayouts(page)
    }
    // eslint-disable-next-line
  }, [])

  const debouncedSearch = debounce((value: string) => {
    onPageChange(1, value);
  }, 500);

  useEffect(() => {
    debouncedSearch(searchTerm);

    return () => debouncedSearch.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  const filterdData = useMemo(() => {
    if (searchTerm) {
      const startingIndex = (metaData.page === 1 ? 0 : metaData.page!) * 10;
      
      return payouts.slice(startingIndex, startingIndex + metaData.limit)
    }

    return payouts;
  }, [metaData.limit, metaData.page, searchTerm, payouts])

  return (
    <div>
      <HeadingTwo>Payouts</HeadingTwo>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <>
            <FlexContainer>
              <Header title="Payout History" />
              <SearchInput
                value={searchTerm}
                placeholder="Search..."
                onChange={(value) => setSearchTerm(value)}
              />
            </FlexContainer>

            <PayoutList data={filterdData} />
            <Pagination
              currentPage={metaData.page!}
              totalPages={metaData.totalPage!}
              onPageChange={(page) => onPageChange(page, searchTerm)}
            />
          </>
        )}
      </Container>
    </div>
  )
}

export default Payout