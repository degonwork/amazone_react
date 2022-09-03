import { ThemeProvider } from '@mui/material';
import { theme } from './shared/ultis/theme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from './pages/home.page';
import RegisterPage from './pages/register.page';
import SigninPage from './pages/signin.page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/signin' element={<SigninPage />} />
        </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App;
