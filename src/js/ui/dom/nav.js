import { DISPLAY_BLOCK, DISPLAY_NONE } from '../../api/constants';
import {
  createImageElement,
  createElementHref,
  createElementButton,
} from './domElements';

export function buildNavBar() {
  const header = document.querySelector('header');

  const nav = document.createElement('nav');

  const logo = createImageElement({
    src: '/images/noroff-logo.png',
    className: 'nav-logo',
  });

  const ul = document.createElement('ul');

  const home = createElementHref({
    href: '/',
    textContent: 'Home',
  });
  home.style.display = DISPLAY_BLOCK;

  const create = createElementHref({
    href: '/post/create/',
    textContent: 'Create Post',
  });
  create.style.display = DISPLAY_BLOCK;

  const profile = createElementHref({
    href: '/profile/',
    textContent: 'Profile',
  });
  profile.style.display = DISPLAY_BLOCK;

  const loginButton = createElementButton({
    id: 'loginButton',
    className: 'nav-btn',
    textContent: 'Login',
  });
  loginButton.addEventListener('click', () => {
    window.location.href = '/auth/login/';
  });
  loginButton.style.display = DISPLAY_NONE;

  const logoutButton = createElementButton({
    id: 'logoutButton',
    className: 'nav-btn',
    textContent: 'Logout',
  });
  logoutButton.style.display = DISPLAY_BLOCK;

  const registerButton = createElementButton({
    id: 'registerButton',
    className: 'nav-btn',
    textContent: 'Register',
  });
  registerButton.addEventListener('click', () => {
    window.location.href = '/auth/register/';
  });
  registerButton.style.display = DISPLAY_NONE;

  ul.append(home, create, profile, logoutButton, loginButton, registerButton);
  nav.append(logo, ul);
  header.append(nav);
}
