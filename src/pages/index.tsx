/* eslint-disable no-constant-condition */
import { Button } from 'react-bootstrap';
import useLocalStorage from 'use-local-storage';
import './index.css';
import DarkImage from '../../public/images/dark-image.jpg';
import LightImage from '../../public/images/light-image.jpg';

export default function Home() {
  // eslint-disable-next-line no-undef
  const [theme, setTheme] = useLocalStorage(`theme` ? `dark` : `light`);
  // const [theme, setTheme] = useState(`dark`);

  const switchTheme = () => {
    const newTheme = theme === `light` ? `dark` : `light`;
    setTheme(newTheme);
  };

  return (
    <main>
      <img
        style={{ width: `100%`, height: `20vh`, objectFit: `cover` }}
        src={theme === `dark` ? DarkImage : LightImage}
      />
      <div className="app" data-theme={theme}>
        <div className="login">
          <h1> Login</h1>
          <div className="container">
            <div className="top">
              <i className="fab fa-google"></i>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-apple"></i>
            </div>
            <p className="divider">
              <span>Or</span>
            </p>
            <form>
              <label>E-mail</label>
              <input type="email" placeholder="Enter your email" />
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
              <div className="remember">
                {/* <input type="checkbox" checked={true} /> */}
                <p>Remember Me</p>
              </div>
              <button>Log In</button>
            </form>
            <div className="bottom">
              <p>Forget your password?</p>
              <a href="/">Reset Password</a>
            </div>
            <p className="create">Create Account</p>
          </div>
          <div className="theme-toggle">
            <h2>Light Theme</h2>
            {theme === `light` ? (
              <Button onClick={switchTheme} className="fas fa-toggle-on">
                Dark Theme
              </Button>
            ) : (
              <Button onClick={switchTheme} className="fas fa-toggle-off">
                Light Theme
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
