import { FaSearch } from "react-icons/fa";
import { InputBase, alpha, styled } from "@mui/material";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0, 
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '8ch',
        },
      },
    },
  }));
  

  const SearchField = () => {
    return (
        <Search>
        <SearchIconWrapper>
          <FaSearch/>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          limit="10"
          inputProps={{ 'aria-label': 'search' }}
          
        />
      </Search>
    )
  }


  export default SearchField;