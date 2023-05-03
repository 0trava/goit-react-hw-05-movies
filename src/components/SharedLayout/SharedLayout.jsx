export const SharedLayout = () => {
    return (
      <Container>
        <Header>
          <Logo />
          <nav>
            <Link to="/" end onClick={e => e.currentTarget.blur()}>
              Home
            </Link>
            <Link to="/movies" onClick={e => e.currentTarget.blur()}>
              Movies
            </Link>
          </nav>
        </Header>
  
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    );
  };