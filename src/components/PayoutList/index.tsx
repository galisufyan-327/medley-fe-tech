import React from 'react';
import { TableProps } from '../../interfaces/table';
import { StatusChip, TableCell, TableContainer, TableHeaderCell, TableRow } from './styles';
import { formatDateAndTime } from '../../helpers';

const PayoutList: React.FC<TableProps> = ({ data }) => {
  return (
    <TableContainer>
      <thead>
        <TableRow isOdd={true}>
          <TableHeaderCell>Date & Time</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Value</TableHeaderCell>
        </TableRow>
      </thead>
      <tbody>
        {!data.length ? (
          <>
            <TableRow>
              <TableCell />
              <TableCell isGrey>No records found.</TableCell>
              <TableCell />
            </TableRow>
          </>
        ) : (
          data.map((row, index) => (
            <TableRow key={index} isOdd={index % 2 === 1}>
              <TableCell isGrey textAlign='left'>{formatDateAndTime(row.dateAndTime)}</TableCell>
              <TableCell>
                <StatusChip status={row.status as string}>{row.status}</StatusChip>
              </TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))
        )}
      </tbody>
    </TableContainer>
  );
};

export default React.memo(PayoutList);
