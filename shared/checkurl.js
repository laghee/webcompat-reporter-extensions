/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { URL } from "url";

export default function isReportableURL(url) {
  // The browser won't be able to import URL from node, so grab a reference
  // to window.URL.
  if (!URL) {
    URL = window.URL;
  }
  try {
    let protocol = new URL(url).protocol;
    return ["http:", "https:"].includes(protocol);
  } catch (error) {
    return false;
  }
}
