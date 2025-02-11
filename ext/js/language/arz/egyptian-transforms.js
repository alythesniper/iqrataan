/*
 * Copyright (C) 2024  Yomitan Authors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


import {prefixInflection} from '../language-transforms.js';
/**
 * @param {string} inflectedSuffix
 * @param {string} deinflectedSuffix
 * @param {string} finalStemSegment
 * @param {Condition[]} conditionsIn
 * @param {Condition[]} conditionsOut
 * @returns {import('language-transformer').SuffixRule<Condition>}
 */
function conditionalSuffixInflection(inflectedSuffix, deinflectedSuffix, finalStemSegment, conditionsIn, conditionsOut) {
    const suffixRegExp = new RegExp(finalStemSegment + inflectedSuffix + '$');
    return {
        type: 'suffix',
        isInflected: suffixRegExp,
        deinflected: deinflectedSuffix,
        deinflect: (text) => text.slice(0, -inflectedSuffix.length) + deinflectedSuffix,
        conditionsIn,
        conditionsOut,
    };
}

/**
 * @param {string} inflectedPrefix
 * @param {string} deinflectedPrefix
 * @param {string} initialStemSegment
 * @param {Condition[]} conditionsIn
 * @param {Condition[]} conditionsOut
 * @returns {import('language-transformer').Rule<Condition>}
 */
function conditionalPrefixInflection(inflectedPrefix, deinflectedPrefix, initialStemSegment, conditionsIn, conditionsOut) {
    const prefixRegExp = new RegExp('^' + inflectedPrefix + initialStemSegment);
    return {
        type: 'prefix',
        isInflected: prefixRegExp,
        deinflect: (text) => deinflectedPrefix + text.slice(inflectedPrefix.length),
        conditionsIn,
        conditionsOut,
    };
}

/** @typedef {keyof typeof conditions} Condition */
const conditions = {
    n: {
        name: 'Noun',
        isDictionaryForm: true,
        subConditions: ['n_p', 'n_s', 'n_d'],
    },
    n_p: {
        name: 'Noun with Prefix',
        isDictionaryForm: false,
    },
    n_s: {
        name: 'Noun with Suffix only',
        isDictionaryForm: false,
    },
    n_d: {
        name: 'Noun Dictionary Form',
        isDictionaryForm: true,
    },
    v: {
        name: 'Verb',
        isDictionaryForm: true,
        subConditions: ['pv', 'iv'],
    },
    pv: {
        name: 'Perfect Verb',
        isDictionaryForm: true,
        subConditions: ['pv_p', 'pv_s', 'pv_d'],
    },
    pv_p: {
        name: 'Perfect Verb with Prefix',
        isDictionaryForm: false,
    },
    pv_s: {
        name: 'Perfect Verb with Suffix only',
        isDictionaryForm: false,
    },
    pv_d: {
        name: 'Perfect Verb Dictionary Form (no affixes)',
        isDictionaryForm: true,
    },
    iv: {
        name: 'Imperfect Verb',
        isDictionaryForm: true,
        subConditions: ['iv_p', 'iv_s', 'iv_d'],
    },
    iv_p: {
        name: 'Imperfect Verb with Prefix',
        isDictionaryForm: false,
    },
    iv_s: {
        name: 'Imperfect Verb with Suffix only',
        isDictionaryForm: false,
    },
    iv_d: {
        name: 'Imperfect Verb Dictionary Form (no affixes)',
        isDictionaryForm: true,
    },
};

export const egyptianTransforms = {
    language: 'arz',
    conditions,
    transforms: {
                // General
                'Pref-Wa': {
                    name: 'and',
                    description: 'and (و); and, so (ف)',
                    rules: [
                        prefixInflection('و', '', ['pv_p'], ['pv_s', 'pv_d']),
                        prefixInflection('ف', '', ['pv_p'], ['pv_s', 'pv_d']),
                    ],
                },

                // Noun
                'NPref-Bi': {
                    name: 'by, with',
                    description: 'by, with',
                    rules: [
                        prefixInflection('ب', '', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('وب', '', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('فب', '', ['n_p'], ['n_s', 'n_d']),
                    ],
                },
                'NPref-Ka': {
                    name: 'like, such as',
                    description: 'like, such as',
                    rules: [
                        prefixInflection('ك', '', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('وك', '', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('فك', '', ['n_p'], ['n_s', 'n_d']),
                    ],
                },
                'NPref-Li': {
                    name: 'for, to; indeed, truly',
                    description: 'for, to (لِ); indeed, truly (لَ)',
                    rules: [
                        prefixInflection('ل', '', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('ول', '', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('فل', '', ['n_p'], ['n_s', 'n_d']),
                    ],
                },
                'NPref-Al': {
                    name: 'the',
                    description: 'the',
                    rules: [
                        prefixInflection('ال', '', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('وال', '', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('فال', '', ['n_p'], ['n_s', 'n_d']),
                    ],
                },
                'NPref-BiAl': {
                    name: 'by/with + the',
                    description: 'by/with + the',
                    rules: [
                        prefixInflection('بال', '', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('وبال', '', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('فبال', '', ['n_p'], ['n_s', 'n_d']),
                    ],
                },
                /*
                'NPref-KaAl': {
                    name: 'like/such as + the',
                    description: 'like/such as + the',
                    rules: [
                        prefixInflection('كال', '', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('وكال', '', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('فكال', '', ['n_p'], ['n_s', 'n_d']),
                    ],
                },
                */
                'NPref-Lil': {
                    name: 'for/to + the',
                    description: 'for/to + the',
                    rules: [
                        conditionalPrefixInflection('لل', '', '(?!ل)', ['n_p'], ['n_s', 'n_d']),
                        conditionalPrefixInflection('ولل', '', '(?!ل)', ['n_p'], ['n_s', 'n_d']),
                        conditionalPrefixInflection('فلل', '', '(?!ل)', ['n_p'], ['n_s', 'n_d']),
                    ],
                },
                'NPref-LiAl': {
                    name: 'for/to + the',
                    description: 'for/to + the, assimilated with initial ل',
                    rules: [
                        prefixInflection('لل', 'ل', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('ولل', 'ل', ['n_p'], ['n_s', 'n_d']),
                        prefixInflection('فلل', 'ل', ['n_p'], ['n_s', 'n_d']),
                    ],
                },
    },
};
