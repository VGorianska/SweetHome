import { Link, Switch, Route, useHistory, useLocation } from "react-router-dom";
import styles from "./App.module.css";

export default function App() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const push = () => {
    history.push("/blog");
    // history.push("/blog", { fromPopup: true });
    history.push({
      pathname: "/blogs",
      search: "?id=5",
      hash: "#react",
      state: { fromPopup: true }
    });
  };

  const replace = () => {
    history.replace("/blog");
  };

  const goBack = () => {
    history.goBack();
  };

  const goForward = () => {
    history.goForward();
  };

  const go = () => {
    history.go(2);
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navWrapper}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/Blog" exact component={Blog} />
      </Switch>
      <hr />

      <div>History Attribute:</div>
      <pre>Length: {history.length}</pre>
      <pre>Action: {history.action}</pre>
      <pre>location.key: {location.key}</pre>
      <button onClick={push} className={styles.btn}>
        push("/blog")
      </button>
      <button onClick={replace} className={styles.btn}>
        replace("/blog")
      </button>
      <button onClick={goBack} className={styles.btn}>
        goBack()
      </button>
      <button onClick={goForward} className={styles.btn}>
        goForward()
      </button>
      <button onClick={go} className={styles.btn}>
        go(-2)
      </button>
    </div>
  );
}

const Home = () => <div className={styles.page}>Home Page</div>;
const About = () => <div className={styles.page}>About Page</div>;
const Portfolio = () => <div className={styles.page}>Portfolio Page</div>;
const Contact = () => <div className={styles.page}>Contact Page</div>;
const Blog = () => <div className={styles.page}>Blog Page</div>;