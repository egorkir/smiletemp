'use strict';

const attrSorter = require('posthtml-attrs-sorter');
const onError = require('./utils/errorHendlers.js');

const config = {
    // =============================
    // ------ Add var path ---------
    // =============================

    path: {
        task: {
            del: './gulp/tasks/del',
            html: './gulp/tasks/html',
            modules: './gulp/tasks/watch-modules'
        },

        src: {
            pug: 'source/pages/*.pug',
            modules: 'source/modules/*'
        },

        distr: {
            root: 'web'
        }
    },

    // =============================
    // ---- Add plugin option ------
    // =============================

    options: {
        pug: {
            pretty: '\t'
        },

        plumber: {
            errorHandler: onError
        },

        htmlPrettify: {
            'unformatted': ['pre', 'code', 'textarea'],
            'extra_liners': ['head', 'body', '/html', 'header', 'main', 'footer'],
            'indent_size': 4,
            'indent_char': ' ',
            'indent_with_tabs': false,
            'eol': '\n',
            'end-with-newline': true,
            'preserve_newlines': true,
            'indent-inner-html': true,
            'brace_style': 'expand'
        },

        posthtml: {
            plugins: [
                attrSorter({
                    order: [
                        'id',
                        'class',
                        'name',
                        'data',
                        'ng',
                        'src',
                        'for',
                        'type',
                        'href',
                        'values',
                        'title',
                        'alt',
                        'role',
                        'aria',
                        'tabindex'
                    ]
                })
            ],
            options: {}
        },
    }
};

module.exports = config;
