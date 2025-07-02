import { AppBar, styled } from '@mui/material';


const Topbar = () => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: "skyblue",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      minHeight: "80px",
    },
    zIndex: 9,
  }));




  return (
    <AppBarStyled position="sticky" color="default">

        </AppBarStyled>
  );
};


export default Topbar;
