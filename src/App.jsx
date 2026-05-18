import { Route, Router, Switch } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import Analytics from './components/Analytics';
import Nav from './components/Nav';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Home from './pages/Home';
import Project from './pages/Project';
import { colors } from './tokens';

// Hash-based routing keeps deep links working on GitLab Pages (no SPA fallback).
function App() {
    return (
        <Router hook={useHashLocation}>
            <div style={{
                minHeight: '100vh',
                backgroundColor: colors.p0,
                color: colors.t0,
            }}>
                <Nav />
                <Analytics />
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects/:id" component={Project} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/blog/:slug" component={BlogPost} />
                    <Route>
                        <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                            <h1>404 — Page Not Found</h1>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
