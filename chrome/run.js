#!/usr/bin/env node

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const chromeLaunch = require("chrome-launch");
const url = "https://webcompat.com/";
const extPath = `${__dirname}/../dist/chrome`;
const args = [`--load-extension=${extPath}`];

chromeLaunch(url, { args });
console.log("A new instance of Chrome should now be open in the background."); // eslint-disable-line no-console
