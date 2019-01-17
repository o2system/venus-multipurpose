/**
 * This file is part of the O2System Venus UI Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

// require("@babel/runtime");
import "@babel/polyfill";
import "@babel/register";
import "webpack-hot-middleware/client?reload=true";
import { UserInterface } from 'o2system-venus-ui';
import "./main.scss";
import "./index.html";

import Multipurpose from './Multipurpose';

/**
 * Multipurpose Object
 */
export default new Multipurpose();