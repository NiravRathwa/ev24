import Header from "./Header";
import Footer from "./Footer";

export const WithLayout = <P extends object>(Component: React.ComponentType<P>) => {
  return function WrappedComponent(props: P) {
    return (
      <>
        <Header />
        <main>
          <Component {...props} />
        </main>
        <Footer />
      </>
    );
  };
};
