/*
 * Copyright © 2015-2016 Antergos
 *
 * mock.js
 *
 * This file is part of lightdm-webkit2-greeter
 *
 * lightdm-webkit2-greeter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License,
 * or any later version.
 *
 * lightdm-webkit2-greeter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * The following additional terms are in effect as per Section 7 of the license:
 *
 * The preservation of all legal notices and author attributions in
 * the material or in the Appropriate Legal Notices displayed
 * by works containing it is required.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


/** @ignore */

declare global {
    interface Window {
        lightdm: any,
        config: any,
        greeter_util: any
    }

    interface String {
        capitalize(): string;
    }
}
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// @ts-ignore

/**
 * @namespace window
 */

// @ts-ignore
if (typeof window.lightdm === 'undefined') {
    /**
     * Mock data to simulate the greeter's API in any web browser.
     * @ignore
     */

    // @ts-ignore
    window.lightdm = null;
    // @ts-ignore
    window.config = null;
    // @ts-ignore
    window.greeter_util = null;

    const MockData = () => ({
        greeter: {
            default_values: {
                string: () => '',
                int: () => 0,
                bool: () => false,
                list: () => [],
                'null': () => null
            },
            hostname: 'Mock Greeter',
            properties: {
                string: ['authentication_user', 'autologin_user', 'default_session', 'hostname', 'num_users'],
                int: ['autologin_timeout'],
                bool: [
                    'autologin_guest', 'can_hibernate', 'can_restart', 'can_shutdown', 'can_suspend',
                    'has_guest_account', 'hide_users', 'in_authentication', 'is_authenticated',
                    'lock_hint', 'select_guest_hint', 'select_user_hint'
                ],
                list: ['languages', 'layouts', 'sessions', 'users'],
                'null': ['language', 'layout']
            }
        },
        languages: [
            {
                name: 'English',
                code: 'en_US.utf8',
                territory: 'USA'
            },
            {
                name: 'Catalan',
                code: 'ca_ES.utf8',
                territory: 'Spain'
            },
            {
                name: 'French',
                code: 'fr_FR.utf8',
                territory: 'France'
            }
        ],
        layouts: [
            {
                name: 'us',
                short_description: 'en',
                description: 'English (US)'
            },
            {
                name: 'at',
                short_description: 'de',
                description: 'German (Austria)'
            },
            {
                name: 'us rus',
                short_description: 'ru',
                description: 'Russian (US, phonetic)'
            }
        ],
        sessions: [
            {
                key: 'bspwm',
                name: 'BSPWM',
                comment: 'Bleh Bleh Bleh'
            },
            {
                key: 'openbox',
                name: 'Openbox',
                comment: 'This session logs you into Openbox'
            },
            {
                key: 'gnome',
                name: 'GNOME',
                comment: 'This session logs you into GNOME'
            },
        ],
        users: [
            {
                display_name: 'Clark Kent',
                language: null,
                layout: null,
                image: '/usr/share/lightdm-webkit/themes/antergos/img/antergos-logo-user',
                home_directory: '/home/superman',
                username: 'superman',
                logged_in: false,
                session: 'gnome',

                name: 'superman',
                real_name: 'Clark Kent'
            },
            {
                display_name: 'Bruce Wayne',
                language: null,
                layout: null,
                image: '/usr/share/lightdm-webkit/themes/antergos/img/antergos-logo-user',
                home_directory: '/home/batman',
                username: 'batman',
                logged_in: false,
                session: 'cinnamon',

                name: 'batman',
                real_name: 'Bruce Wayne'
            },
            {
                display_name: 'Peter Parker',
                language: null,
                layout: null,
                image: '/usr/share/lightdm-webkit/themes/antergos/img/antergos-logo-user',
                home_directory: '/home/spiderman',
                username: 'spiderman',
                logged_in: false,
                session: 'MATE',

                name: 'spiderman',
                real_name: 'Peter Parker'
            }
        ]
    });

    /**
     * Interface for object that holds info about a session. Session objects are not
     * created by the theme's code, but rather by the {@link LightDMGreeter} class.
     */
    class LightDMSession {
        comment = '';
        key = '';
        name = '';

        constructor({comment, key, name}) {
            /**
             * The comment for the session.
             * @type {String}
             * @readonly
             */
            this.comment = comment;

            /**
             * The key for the session.
             * @type {String}
             * @readonly
             */
            this.key = key;

            /**
             * The name for the session.
             * @type {String}
             * @readonly
             */
            this.name = name;
        }
    }


    /**
     * Interface for object that holds info about a language on this system. Language objects are not
     * created by the theme's code, but rather by the {@link LightDMGreeter} class.
     */
    class LightDMLanguage {
        code = '';
        name = '';
        territory = '';

        constructor({code, name, territory}) {
            /**
             * The code for the language.
             * @type {String}
             * @readonly
             */
            this.code = code;

            /**
             * The name for the language.
             * @type {String}
             * @readonly
             */
            this.name = name;

            /**
             * The territory for the language.
             * @type {String}
             * @readonly
             */
            this.territory = territory;
        }
    }


    /**
     * Interface for object that holds info about a keyboard layout on this system. Language
     * objects are not created by the theme's code, but rather by the {@link LightDMGreeter} class.
     */
    class LightDMLayout {
        description = '';
        name = '';
        short_description = '';

        constructor({description, name, short_description}) {
            /**
             * The description for the layout.
             * @type {String}
             * @readonly
             */
            this.description = description;

            /**
             * The name for the layout.
             * @type {String}
             * @readonly
             */
            this.name = name;

            /**
             * The territory for the layout.
             * @type {String}
             * @readonly
             */
            this.short_description = short_description;
        }
    }


    /**
     * Interface for object that holds info about a user account on this system. User
     * objects are not created by the theme's code, but rather by the {@link LightDMGreeter} class.
     */
    class LightDMUser {
        display_name = '';
        language = '';
        layout = '';
        image = '';
        home_directory = '';
        username = '';
        logged_in = false;
        session = null;
        name = '';
        real_name = '';

        constructor(user_info) {
            /**
             * The display name for the user.
             * @type {String}
             * @readonly
             */
            this.display_name = user_info.display_name;

            /**
             * The language for the user.
             * @type {String}
             * @readonly
             */
            this.language = user_info.language;

            /**
             * The keyboard layout for the user.
             * @type {String}
             * @readonly
             */
            this.layout = user_info.layout;

            /**
             * The image for the user.
             * @type {String}
             * @readonly
             */
            this.image = user_info.image;

            /**
             * The home_directory for the user.
             * @type {String}
             * @readonly
             */
            this.home_directory = user_info.home_directory;

            /**
             * The username for the user.
             * @type {String}
             * @readonly
             */
            this.username = user_info.username;

            /**
             * Whether or not the user is currently logged in.
             * @type {Boolean}
             * @readonly
             */
            this.logged_in = user_info.logged_in;

            /**
             * The last session that the user logged into.
             * @type {String|null}
             * @readonly
             */
            this.session = user_info.session;

            /**
             * DEPRECATED!
             * @deprecated See {@link LightDMUser.username}.
             * @type {String}
             * @readonly
             */
            this.name = user_info.name;

            /**
             * DEPRECATED!
             * @deprecated See {@link LightDMUser.display_name}.
             * @type {String}
             * @readonly
             */
            this.real_name = user_info.real_name;
        }
    }


    /**
     * Provides various utility methods for use by theme authors. The greeter will automatically
     * create an instance of this class when it starts. The instance can be accessed
     * with the global variable: `greeter_util`.
     */
    class GreeterUtil {
        _mock_data;

        constructor() {
            // @ts-ignore
            if (null !== window.greeter_util) {
                // @ts-ignore
                return window.greeter_util;
            }

            // @ts-ignore
            window.greeter_util = this;
            this._mock_data = MockData();
        }

        /**
         * Returns the contents of directory at `path`.
         *
         * @param path
         * @returns {String[]} List of abs paths for the files and directories found in `path`.
         */
        dirlist(path) {
            return this._mock_data.dirlist;
        }

        /**
         * Escape HTML entities in a string.
         *
         * @param {String} text
         * @returns {String}
         */
        txt2html(text) {
            let entities_map = {
                '"': '&quot;',
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;'
            };

            return text.replace(/["&<>]/g, a => entities_map[a]);
        }
    }


    /**
     * Provides theme authors with a way to retrieve values from the greeter's config
     * file located at `/etc/lightdm/lightdm-webkit2-greeter.conf`. The greeter will
     * create an instance of this class when it starts. The instance can be accessed
     * with the global variable: `config`.
     */
    class ConfigFile {
        _mock_data;

        constructor() {
            // @ts-ignore
            if (null !== window.config) {
                // @ts-ignore
                return config;
            }

            // @ts-ignore
            window.config = this;
            this._mock_data = MockData();
        }

        /**
         * Returns the value of `key` from the greeter's config file.
         *
         * @arg {String} key
         * @returns {Boolean} Config value for `key`.
         */
        get_bool(key) {
            return (key in this._mock_data.config) ? Boolean(this._mock_data.config[key]) : false;
        }

        /**
         * Returns the value of `key` from the greeter's config file.
         *
         * @arg {String} key
         * @returns {Number} Config value for `key`.
         */
        get_num(key) {
            return (key in this._mock_data.config) ? parseInt(this._mock_data.config[key]) : 0;
        }

        /**
         * Returns the value of `key` from the greeter's config file.
         *
         * @arg {String} key
         * @returns {String} Config value for `key`.
         */
        get_str(key) {
            return (key in this._mock_data.config) ? this._mock_data.config[key] : '';
        }
    }


    /**
     * @ignore
     */
    const MockObjects = {
        LightDMLanguage(obj) {
            return new LightDMLanguage(obj);
        },
        LightDMLayout(obj) {
            return new LightDMLayout(obj);
        },
        LightDMSession(obj) {
            return new LightDMSession(obj);
        },
        LightDMUser(obj) {
            return new LightDMUser(obj);
        }
    };


    /**
     * Singleton class which implements the LightDMGreeter Interface. Greeter themes will
     * interact directly with this class to facilitate the user log in processes.
     * The greeter will automatically create an instance of this class when it starts.
     * The instance can be accessed with the global variable: `lightdm`.
     */
    class LightDMGreeter {
        _mock_data;

        constructor() {
            // @ts-ignore
            if (null !== window.lightdm) {
                // @ts-ignore
                return window.lightdm;
            }

            // @ts-ignore
            window.lightdm = this;
            this._mock_data = MockData();

            this._initialize();

        }

        /**
         * @private
         */
        _do_mocked_system_action(action) {
            alert(`System ${action} triggered.`);
            document.location.reload();
            return true;
        }

        /**
         * @private
         */
        _initialize() {
            this._set_default_property_values();
        }

        /**
         * @private
         */
        _populate_ldm_object_arrays() {
            for (let object_type of ['sessions', 'users', 'languages', 'layouts']) {
                let object_name = object_type.slice(0, -1).capitalize(),
                    ObjectClass = `LightDM${object_name}`;

                for (let object_info of this._mock_data[object_type]) {
                    this[object_type].push(MockObjects[ObjectClass](object_info));
                }
            }
        }

        /**
         * @private
         */
        _set_default_property_values() {
            for (let property_type of Object.keys(this._mock_data.greeter.properties)) {
                for (let property of this._mock_data.greeter.properties[property_type]) {
                    if (property.indexOf('can_') > -1) {
                        // System Power Actions
                        this[`_${property}`] = true;
                    } else {
                        this[`_${property}`] = this._mock_data.greeter.default_values[property_type]();
                    }
                }
            }

            this._populate_ldm_object_arrays();
        }

        /**
         * The username of the user being authenticated or {@link null}
         * if no authentication is in progress.
         * @type {String|null}
         * @readonly
         */
        _authentication_user;
        get authentication_user() {
            return this._authentication_user;
        }

        /**
         * Whether or not the guest account should be automatically logged
         * into when the timer expires.
         * @type {Boolean}
         * @readonly
         */
        _autologin_guest;
        get autologin_guest() {
            return this._autologin_guest;
        }

        /**
         * The number of seconds to wait before automatically logging in.
         * @type {Number}
         * @readonly
         */
        _autologin_timeout;
        get autologin_timeout() {
            return this._autologin_timeout;
        }

        /**
         * The username with which to automatically log in when the timer expires.
         * @type {String}
         * @readonly
         */
        _autologin_user;
        get autologin_user() {
            return this._autologin_user;
        }

        /**
         * Whether or not the greeter can make the system hibernate.
         * @type {Boolean}
         * @readonly
         */
        _can_hibernate;
        get can_hibernate() {
            return this._can_hibernate;
        }

        /**
         * Whether or not the greeter can make the system restart.
         * @type {Boolean}
         * @readonly
         */
        _can_restart;
        get can_restart() {
            return this._can_restart;
        }

        /**
         * Whether or not the greeter can make the system shutdown.
         * @type {Boolean}
         * @readonly
         */
        _can_shutdown;
        get can_shutdown() {
            return this._can_shutdown;
        }

        /**
         * Whether or not the greeter can make the system suspend/sleep.
         * @type {Boolean}
         * @readonly
         */
        _can_suspend;
        get can_suspend() {
            return this._can_suspend;
        }

        /**
         * The name of the default session.
         * @type {String}
         * @readonly
         */
        _default_session;
        get default_session() {
            return this._default_session;
        }

        /**
         * Whether or not guest sessions are supported.
         * @type {Boolean}
         * @readonly
         */
        _has_guest_account;
        get has_guest_account() {
            return this._has_guest_account;
        }

        /**
         * Whether or not user accounts should be hidden.
         * @type {Boolean}
         * @readonly
         */
        _hide_users;
        get hide_users() {
            return this._hide_users;
        }

        /**
         * The system's hostname.
         * @type {String}
         * @readonly
         */
        _hostname = 'testing';
        get hostname() {
            return this._hostname;
        }

        /**
         * Whether or not the greeter is in the process of authenticating.
         * @type {Boolean}
         * @readonly
         */
        _in_authentication;
        get in_authentication() {
            return this._in_authentication;
        }

        /**
         * Whether or not the greeter has successfully authenticated.
         * @type {Boolean}
         * @readonly
         */
        _is_authenticated;
        get is_authenticated() {
            return this._is_authenticated;
        }

        /**
         * The current language or {@link null} if no language.
         * @type {LightDMLanguage|null}
         * @readonly
         */
        _language;
        get language() {
            return this._language;
        }

        /**
         * A list of languages to present to the user.
         * @type {LightDMLanguage[]}
         * @readonly
         */
        _languages;
        get languages() {
            return this._languages;
        }

        /**
         * The currently active layout for the selected user.
         * @type {LightDMLayout}
         */
        _layout;
        get layout() {
            return this._layout;
        }

        /**
         * Set the active layout for the selected user.
         * @param {LightDMLayout} value
         */
        set layout(value) {
            this._layout = value;
        }

        /**
         * A list of keyboard layouts to present to the user.
         * @type {LightDMLayout[]}
         * @readonly
         */
        _layouts;
        get layouts() {
            return this._layouts;
        }

        /**
         * Whether or not the greeter was started as a lock screen.
         * @type {Boolean}
         * @readonly
         */
        _lock_hint;
        get lock_hint() {
            return this._lock_hint;
        }

        /**
         * The number of users able to log in.
         * @type {Number}
         * @readonly
         */
        get num_users() {
            return this.users.length;
        }

        /**
         * Whether or not the guest account should be selected by default.
         * @type {Boolean}
         * @readonly
         */
        _select_guest_hint;
        get select_guest_hint() {
            return this._select_guest_hint;
        }

        /**
         * The username to select by default.
         * @type {String}
         * @readonly
         */
        _select_user_hint;
        get select_user_hint() {
            return this._select_user_hint;
        }

        /**
         * List of available sessions.
         * @type {LightDMSession[]}
         * @readonly
         */
        _sessions;
        get sessions() {
            return this._sessions;
        }

        /**
         * List of available users.
         * @type {LightDMUser[]}
         * @readonly
         */
        _users;
        get users() {
            return this._users;
        }


        /**
         * Starts the authentication procedure for a user.
         *
         * @arg {String|null} username A username or {@link null} to prompt for a username.
         */
        authenticate(username = null) {
        }

        /**
         * Starts the authentication procedure for the guest user.
         */
        authenticate_as_guest() {
        }

        /**
         * Cancel user authentication that is currently in progress.
         */
        cancel_authentication() {
        }

        /**
         * Cancel the automatic login.
         */
        cancel_autologin() {
        }

        /**
         * Get the value of a hint.
         * @arg {String} name The name of the hint to get.
         * @returns {String|Boolean|Number|null}
         */
        get_hint(name) {
        }

        /**
         * Triggers the system to hibernate.
         * @returns {Boolean} {@link true} if hibernation initiated, otherwise {@link false}
         */
        hibernate() {
            return this._do_mocked_system_action('hibernate');
        }

        /**
         * Provide a response to a prompt.
         * @arg {*} response
         */
        respond(response) {
        }

        /**
         * Triggers the system to restart.
         * @returns {Boolean} {@link true} if restart initiated, otherwise {@link false}
         */
        restart() {
            return this._do_mocked_system_action('restart');
        }

        /**
         * Set the language for the currently authenticated user.
         * @arg {String} language The language in the form of a locale specification (e.g.
         *     'de_DE.UTF-8')
         * @returns {Boolean} {@link true} if successful, otherwise {@link false}
         */
        set_language(language) {
        }

        /**
         * Triggers the system to shutdown.
         * @returns {Boolean} {@link true} if shutdown initiated, otherwise {@link false}
         */
        shutdown() {
            return this._do_mocked_system_action('shutdown');
        }

        /**
         * Start a session for the authenticated user.
         * @arg {String|null} session The session to log into or {@link null} to use the default.
         * @returns {Boolean} {@link true} if successful, otherwise {@link false}
         */
        start_session(session) {
        }

        /**
         * Triggers the system to suspend/sleep.
         * @returns {Boolean} {@link true} if suspend/sleep initiated, otherwise {@link false}
         */
        suspend() {
            return this._do_mocked_system_action('suspend');
        }

    }

    new ConfigFile();
    new GreeterUtil();
    new LightDMGreeter();

    window.lightdm._hostname = "testing";
}

export {};

