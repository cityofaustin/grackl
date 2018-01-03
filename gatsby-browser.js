import ReactGA from 'react-ga';
ReactGA.initialize('UA-110716917-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.location.pathname + state.location.search);
  console.log(state.location.pathname)
};
