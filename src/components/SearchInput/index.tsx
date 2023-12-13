import React from 'react';
import { StyledSearchInput } from './styles';

interface SearchInputProps {
  value?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, placeholder, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <StyledSearchInput value={value} type="text" placeholder={placeholder} onChange={handleInputChange} />;
};

export default SearchInput;
