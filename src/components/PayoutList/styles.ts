import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr<{ isOdd?: boolean }>`
  background-color: ${({ isOdd }) => (isOdd ? '#ffffff' : '#F4F4F480')};
`;

export const TableHeaderCell = styled.th<{ textAlign?: string }>`
  padding: 20px;
  text-align: ${({ textAlign }) => (textAlign || "left")};
  color: #6F767E;
  font-weight: 400;
`;

export const TableCell = styled.td<{ isGrey?: boolean, textAlign?: string }>`
  padding: 10px 20px;
  font-size: 14px;
  text-align: ${({ textAlign }) => (textAlign || "left")};
  color: ${({ isGrey }) => ((isGrey) ? '#6F767E' : 'black')};
  font-weight: ${({ isGrey }) => (isGrey ? '400' : 'bold')};
`;

export const StatusChip = styled.span<{ status: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  ${({ status }) => {
    switch (status) {
      case 'Pending':
        return 'background-color: #6F767E66;'; 
      case 'Paid':
        return 'background-color: #60CA57;'; 
      case 'Completed':
        return 'background-color: #60CA57;'; 
      default:
        return 'background-color: #808080;'; 
    }
  }}
`;
