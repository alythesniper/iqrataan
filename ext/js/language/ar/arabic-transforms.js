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


const conditions = {
    n: {
        name: 'Noun',
        isDictionaryForm: false,
    },
};

export const arabicTransforms = {
    language: 'ar',
    conditions,
    transforms: {
        and: {
            name: 'and',
            description: 'The conjunction و, means "and"',
            rules: [
                prefixInflection('و', '', [], []),
            ],
        },
        and_so: {
            name: 'and;so',
            description: 'and;so CONJ ',
            rules: [
                prefixInflection('ف', '', [], []),
            ],
        },
        by_with: {
            name: 'by;with',
            description: 'by;with PREP ',
            rules: [
                prefixInflection('ب', '', [], []),
            ],
        },
        like_such__: {
            name: 'like;such as',
            description: 'like;such as PREP ',
            rules: [
                prefixInflection('ك', '', [], []),
            ],
        },
        and___by_with: {
            name: 'and + by/with',
            description: 'and + by/with CONJ PREP ',
            rules: [
                prefixInflection('وب', '', [], []),
            ],
        },
        and___like_such__: {
            name: 'and + like/such as',
            description: 'and + like/such as CONJ PREP ',
            rules: [
                prefixInflection('وك', '', [], []),
            ],
        },
        for_to: {
            name: 'for/to',
            description: 'for/to PREP ',
            rules: [
                prefixInflection('ل', '', [], []),
            ],
        },
        and___for_to: {
            name: 'and + for/to',
            description: 'and + for/to CONJ PREP ',
            rules: [
                prefixInflection('ول', '', [], []),
            ],
        },
        indeed_truly: {
            name: 'indeed/truly',
            description: 'indeed/truly EMPHATIC_PARTICLE ',
            rules: [
                prefixInflection('ل', '', [], []),
            ],
        },
        would_have: {
            name: 'would have',
            description: 'would have RESULT_CLAUSE_PARTICLE ',
            rules: [
                prefixInflection('ل', '', [], []),
            ],
        },
        the: {
            name: 'the',
            description: 'the determiner/article ال, means "the"',
            rules: [
                prefixInflection('ال', '', [], []),
            ],
        },
        and___the: {
            name: 'and + the',
            description: 'and + the CONJ DET ',
            rules: [
                prefixInflection('وال', '', [], []),
            ],
        },
        and_so___the: {
            name: 'and/so + the',
            description: 'and/so + the CONJ DET ',
            rules: [
                prefixInflection('فال', '', [], []),
            ],
        },
        with_by___the: {
            name: 'with/by + the',
            description: 'with/by + the PREP DET ',
            rules: [
                prefixInflection('بال', '', [], []),
            ],
        },
        like_such_____the: {
            name: 'like/such as + the',
            description: 'like/such as + the PREP DET ',
            rules: [
                prefixInflection('كال', '', [], []),
            ],
        },
        and___with_by_the: {
            name: 'and + with/by the',
            description: 'and + with/by the CONJ PREP DET ',
            rules: [
                prefixInflection('وبال', '', [], []),
            ],
        },
        and_so___with_by___the: {
            name: 'and/so + with/by + the',
            description: 'and/so + with/by + the CONJ PREP DET ',
            rules: [
                prefixInflection('فبال', '', [], []),
            ],
        },
        and___like_such_____the: {
            name: 'and + like/such as + the',
            description: 'and + like/such as + the CONJ PREP DET ',
            rules: [
                prefixInflection('وكال', '', [], []),
            ],
        },
        to_for___the: {
            name: 'to/for + the',
            description: 'to/for + the PREP DET ',
            rules: [
                prefixInflection('لل', '', [], []),
            ],
        },
        and___to_for___the: {
            name: 'and + to/for + the',
            description: 'and + to/for + the CONJ PREP DET ',
            rules: [
                prefixInflection('ولل', '', [], []),
            ],
        },
        and_so_to_for___the: {
            name: 'and/so to/for + the',
            description: 'and/so to/for + the CONJ PREP DET ',
            rules: [
                prefixInflection('فلل', '', [], []),
            ],
        },
        he_it: {
            name: 'he/it',
            description: 'he/it IV3MS ',
            rules: [
                prefixInflection('ي', '', [], []),
            ],
        },
        and___he_it: {
            name: 'and + he/it',
            description: 'and + he/it CONJ IV3MS ',
            rules: [
                prefixInflection('وي', '', [], []),
            ],
        },
        and_so___he_it: {
            name: 'and/so + he/it',
            description: 'and/so + he/it CONJ IV3MS ',
            rules: [
                prefixInflection('في', '', [], []),
            ],
        },
        will___he_it: {
            name: 'will + he/it',
            description: 'will + he/it FUT IV3MS ',
            rules: [
                prefixInflection('سي', '', [], []),
            ],
        },
        and___will___he_it: {
            name: 'and + will + he/it',
            description: 'and + will + he/it CONJ FUT IV3MS ',
            rules: [
                prefixInflection('وسي', '', [], []),
            ],
        },
        and_so___will___he_it: {
            name: 'and/so + will + he/it',
            description: 'and/so + will + he/it CONJ FUT IV3MS ',
            rules: [
                prefixInflection('فسي', '', [], []),
            ],
        },
        they__both_: {
            name: 'they (both)',
            description: 'they (both) IV3MD ',
            rules: [
                prefixInflection('ي', '', [], []),
            ],
        },
        and___they__both_: {
            name: 'and + they (both)',
            description: 'and + they (both) CONJ IV3MD ',
            rules: [
                prefixInflection('وي', '', [], []),
            ],
        },
        and_so___they__both_: {
            name: 'and/so + they (both)',
            description: 'and/so + they (both) CONJ IV3MD ',
            rules: [
                prefixInflection('في', '', [], []),
            ],
        },
        will___they__both_: {
            name: 'will + they (both)',
            description: 'will + they (both) FUT IV3MD ',
            rules: [
                prefixInflection('سي', '', [], []),
            ],
        },
        and___will___they__both_: {
            name: 'and + will + they (both)',
            description: 'and + will + they (both) CONJ FUT IV3MD ',
            rules: [
                prefixInflection('وسي', '', [], []),
            ],
        },
        and_so___will___they__both_: {
            name: 'and/so + will + they (both)',
            description: 'and/so + will + they (both) CONJ FUT IV3MD ',
            rules: [
                prefixInflection('فسي', '', [], []),
            ],
        },
        they__people_: {
            name: 'they (people)',
            description: 'they (people) IV3MP ',
            rules: [
                prefixInflection('ي', '', [], []),
            ],
        },
        and___they__people_: {
            name: 'and + they (people)',
            description: 'and + they (people) CONJ IV3MP ',
            rules: [
                prefixInflection('وي', '', [], []),
            ],
        },
        and_so___they__people_: {
            name: 'and/so + they (people)',
            description: 'and/so + they (people) CONJ IV3MP ',
            rules: [
                prefixInflection('في', '', [], []),
            ],
        },
        will___they__people_: {
            name: 'will + they (people)',
            description: 'will + they (people) FUT IV3MP ',
            rules: [
                prefixInflection('سي', '', [], []),
            ],
        },
        and___will___they__people_: {
            name: 'and + will + they (people)',
            description: 'and + will + they (people) CONJ FUT IV3MP ',
            rules: [
                prefixInflection('وسي', '', [], []),
            ],
        },
        and_so___will___they__people_: {
            name: 'and/so + will + they (people)',
            description: 'and/so + will + they (people) CONJ FUT IV3MP ',
            rules: [
                prefixInflection('فسي', '', [], []),
            ],
        },
        they__women_: {
            name: 'they (women)',
            description: 'they (women) IV3FP ',
            rules: [
                prefixInflection('ي', '', [], []),
            ],
        },
        and___they__women_: {
            name: 'and + they (women)',
            description: 'and + they (women) CONJ IV3FP ',
            rules: [
                prefixInflection('وي', '', [], []),
            ],
        },
        and_so___they__women_: {
            name: 'and/so + they (women)',
            description: 'and/so + they (women) CONJ IV3FP ',
            rules: [
                prefixInflection('في', '', [], []),
            ],
        },
        will___they__women_: {
            name: 'will + they (women)',
            description: 'will + they (women) FUT IV3FP ',
            rules: [
                prefixInflection('سي', '', [], []),
            ],
        },
        and___will___they__women_: {
            name: 'and + will + they (women)',
            description: 'and + will + they (women) CONJ FUT IV3FP ',
            rules: [
                prefixInflection('وسي', '', [], []),
            ],
        },
        and_so___will___they__women_: {
            name: 'and/so + will + they (women)',
            description: 'and/so + will + they (women) CONJ FUT IV3FP ',
            rules: [
                prefixInflection('فسي', '', [], []),
            ],
        },
        for___him_it_to: {
            name: 'for + him/it to',
            description: 'for + him/it to SUBJUNC IV3MS ',
            rules: [
                prefixInflection('لي', '', [], []),
            ],
        },
        and___for___him_it_to: {
            name: 'and + for + him/it to',
            description: 'and + for + him/it to CONJ SUBJUNC IV3MS ',
            rules: [
                prefixInflection('ولي', '', [], []),
            ],
        },
        and_so___for___him_it_to: {
            name: 'and/so + for + him/it to',
            description: 'and/so + for + him/it to CONJ SUBJUNC IV3MS ',
            rules: [
                prefixInflection('فلي', '', [], []),
            ],
        },
        for___them__both__to: {
            name: 'for + them (both) to',
            description: 'for + them (both) to SUBJUNC IV3MD ',
            rules: [
                prefixInflection('لي', '', [], []),
            ],
        },
        and___for___them__both__to: {
            name: 'and + for + them (both) to',
            description: 'and + for + them (both) to CONJ SUBJUNC IV3MD ',
            rules: [
                prefixInflection('ولي', '', [], []),
            ],
        },
        and_so___for___them__both__to: {
            name: 'and/so + for + them (both) to',
            description: 'and/so + for + them (both) to CONJ SUBJUNC IV3MD ',
            rules: [
                prefixInflection('فلي', '', [], []),
            ],
        },
        for___them__people__to: {
            name: 'for + them (people) to',
            description: 'for + them (people) to SUBJUNC IV3MP ',
            rules: [
                prefixInflection('لي', '', [], []),
            ],
        },
        and___for___them__people__to: {
            name: 'and + for + them (people) to',
            description: 'and + for + them (people) to CONJ SUBJUNC IV3MP ',
            rules: [
                prefixInflection('ولي', '', [], []),
            ],
        },
        and_so___for___them__people__to: {
            name: 'and/so + for + them (people) to',
            description: 'and/so + for + them (people) to CONJ SUBJUNC IV3MP ',
            rules: [
                prefixInflection('فلي', '', [], []),
            ],
        },
        for___them__women__to: {
            name: 'for + them (women) to',
            description: 'for + them (women) to SUBJUNC IV3FP ',
            rules: [
                prefixInflection('لي', '', [], []),
            ],
        },
        and___for___them__women__to: {
            name: 'and + for + them (women) to',
            description: 'and + for + them (women) to CONJ SUBJUNC IV3FP ',
            rules: [
                prefixInflection('ولي', '', [], []),
            ],
        },
        and_so___for___them__women__to: {
            name: 'and/so + for + them (women) to',
            description: 'and/so + for + them (women) to CONJ SUBJUNC IV3FP ',
            rules: [
                prefixInflection('فلي', '', [], []),
            ],
        },
        it_they_she: {
            name: 'it/they/she',
            description: 'it/they/she IV3FS ',
            rules: [
                prefixInflection('ت', '', [], []),
            ],
        },
        and___it_they_she: {
            name: 'and + it/they/she',
            description: 'and + it/they/she CONJ IV3FS ',
            rules: [
                prefixInflection('وت', '', [], []),
            ],
        },
        and_so___it_they_she: {
            name: 'and/so + it/they/she',
            description: 'and/so + it/they/she CONJ IV3FS ',
            rules: [
                prefixInflection('فت', '', [], []),
            ],
        },
        will___it_they_she: {
            name: 'will + it/they/she',
            description: 'will + it/they/she FUT IV3FS ',
            rules: [
                prefixInflection('ست', '', [], []),
            ],
        },
        and___will___it_they_she: {
            name: 'and + will + it/they/she',
            description: 'and + will + it/they/she CONJ FUT IV3FS ',
            rules: [
                prefixInflection('وست', '', [], []),
            ],
        },
        and_so___will___it_they_she: {
            name: 'and/so + will + it/they/she',
            description: 'and/so + will + it/they/she CONJ FUT IV3FS ',
            rules: [
                prefixInflection('فست', '', [], []),
            ],
        },
        you__m_c_sg__: {
            name: 'you [masc.sg.]',
            description: 'you [masc.sg.] IV2MS ',
            rules: [
                prefixInflection('ت', '', [], []),
            ],
        },
        and___you__m_c_sg__: {
            name: 'and + you [masc.sg.]',
            description: 'and + you [masc.sg.] CONJ IV2MS ',
            rules: [
                prefixInflection('وت', '', [], []),
            ],
        },
        and_so___you__m_c_sg__: {
            name: 'and/so + you [masc.sg.]',
            description: 'and/so + you [masc.sg.] CONJ IV2MS ',
            rules: [
                prefixInflection('فت', '', [], []),
            ],
        },
        will___you__m_c_sg__: {
            name: 'will + you [masc.sg.]',
            description: 'will + you [masc.sg.] FUT IV2MS ',
            rules: [
                prefixInflection('ست', '', [], []),
            ],
        },
        and___will___you__m_c_sg__: {
            name: 'and + will + you [masc.sg.]',
            description: 'and + will + you [masc.sg.] CONJ FUT IV2MS ',
            rules: [
                prefixInflection('وست', '', [], []),
            ],
        },
        and_so___will___you__m_c_sg__: {
            name: 'and/so + will + you [masc.sg.]',
            description: 'and/so + will + you [masc.sg.] CONJ FUT IV2MS ',
            rules: [
                prefixInflection('فست', '', [], []),
            ],
        },
        you__both_: {
            name: 'you (both)',
            description: 'you (both) IV2D ',
            rules: [
                prefixInflection('ت', '', [], []),
            ],
        },
        and___you__both_: {
            name: 'and + you (both)',
            description: 'and + you (both) CONJ IV2D ',
            rules: [
                prefixInflection('وت', '', [], []),
            ],
        },
        and_so___you__both_: {
            name: 'and/so + you (both)',
            description: 'and/so + you (both) CONJ IV2D ',
            rules: [
                prefixInflection('فت', '', [], []),
            ],
        },
        will___you__both_: {
            name: 'will + you (both)',
            description: 'will + you (both) FUT IV2D ',
            rules: [
                prefixInflection('ست', '', [], []),
            ],
        },
        and___will___you__both_: {
            name: 'and + will + you (both)',
            description: 'and + will + you (both) CONJ FUT IV2D ',
            rules: [
                prefixInflection('وست', '', [], []),
            ],
        },
        and_so___will___you__both_: {
            name: 'and/so + will + you (both)',
            description: 'and/so + will + you (both) CONJ FUT IV2D ',
            rules: [
                prefixInflection('فست', '', [], []),
            ],
        },
        they__both___fem_du__: {
            name: 'they (both) [fem.du.]',
            description: 'they (both) [fem.du.] IV3FD ',
            rules: [
                prefixInflection('ت', '', [], []),
            ],
        },
        and___they__both___fem_du__: {
            name: 'and + they (both) [fem.du.]',
            description: 'and + they (both) [fem.du.] CONJ IV3FD ',
            rules: [
                prefixInflection('وت', '', [], []),
            ],
        },
        and_so___they__both___fem_du__: {
            name: 'and/so + they (both) [fem.du.]',
            description: 'and/so + they (both) [fem.du.] CONJ IV3FD ',
            rules: [
                prefixInflection('فت', '', [], []),
            ],
        },
        will___they__both___fem_du__: {
            name: 'will + they (both) [fem.du.]',
            description: 'will + they (both) [fem.du.] FUT IV3FD ',
            rules: [
                prefixInflection('ست', '', [], []),
            ],
        },
        and___will___they__both___fem_du__: {
            name: 'and + will + they (both) [fem.du.]',
            description: 'and + will + they (both) [fem.du.] CONJ FUT IV3FD ',
            rules: [
                prefixInflection('وست', '', [], []),
            ],
        },
        and_so___will___they__both___fem_du__: {
            name: 'and/so + will + they (both) [fem.du.]',
            description: 'and/so + will + they (both) [fem.du.] CONJ FUT IV3FD ',
            rules: [
                prefixInflection('فست', '', [], []),
            ],
        },
        you__fem_sg__: {
            name: 'you [fem.sg.]',
            description: 'you [fem.sg.] IV2FS ',
            rules: [
                prefixInflection('ت', '', [], []),
            ],
        },
        and___you__fem_sg__: {
            name: 'and + you [fem.sg.]',
            description: 'and + you [fem.sg.] CONJ IV2FS ',
            rules: [
                prefixInflection('وت', '', [], []),
            ],
        },
        and_so___you__fem_sg__: {
            name: 'and/so + you [fem.sg.]',
            description: 'and/so + you [fem.sg.] CONJ IV2FS ',
            rules: [
                prefixInflection('فت', '', [], []),
            ],
        },
        will___you__fem_sg__: {
            name: 'will + you [fem.sg.]',
            description: 'will + you [fem.sg.] FUT IV2FS ',
            rules: [
                prefixInflection('ست', '', [], []),
            ],
        },
        and___will___you__fem_sg__: {
            name: 'and + will + you [fem.sg.]',
            description: 'and + will + you [fem.sg.] CONJ FUT IV2FS ',
            rules: [
                prefixInflection('وست', '', [], []),
            ],
        },
        and_so___will___you__fem_sg__: {
            name: 'and/so + will + you [fem.sg.]',
            description: 'and/so + will + you [fem.sg.] CONJ FUT IV2FS ',
            rules: [
                prefixInflection('فست', '', [], []),
            ],
        },
        you__m_c_pl__: {
            name: 'you [masc.pl.]',
            description: 'you [masc.pl.] IV2MP ',
            rules: [
                prefixInflection('ت', '', [], []),
            ],
        },
        and___you__m_c_pl__: {
            name: 'and + you [masc.pl.]',
            description: 'and + you [masc.pl.] CONJ IV2MP ',
            rules: [
                prefixInflection('وت', '', [], []),
            ],
        },
        and_so___you__m_c_pl__: {
            name: 'and/so + you [masc.pl.]',
            description: 'and/so + you [masc.pl.] CONJ IV2MP ',
            rules: [
                prefixInflection('فت', '', [], []),
            ],
        },
        will___you__m_c_pl__: {
            name: 'will + you [masc.pl.]',
            description: 'will + you [masc.pl.] FUT IV2MP ',
            rules: [
                prefixInflection('ست', '', [], []),
            ],
        },
        and___will___you__m_c_pl__: {
            name: 'and + will + you [masc.pl.]',
            description: 'and + will + you [masc.pl.] CONJ FUT IV2MP ',
            rules: [
                prefixInflection('وست', '', [], []),
            ],
        },
        and_so___will___you__m_c_pl__: {
            name: 'and/so + will + you [masc.pl.]',
            description: 'and/so + will + you [masc.pl.] CONJ FUT IV2MP ',
            rules: [
                prefixInflection('فست', '', [], []),
            ],
        },
        you__fem_pl__: {
            name: 'you [fem.pl.]',
            description: 'you [fem.pl.] IV2FP ',
            rules: [
                prefixInflection('ت', '', [], []),
            ],
        },
        and___you__fem_pl__: {
            name: 'and + you [fem.pl.]',
            description: 'and + you [fem.pl.] CONJ IV2FP ',
            rules: [
                prefixInflection('وت', '', [], []),
            ],
        },
        and_so___you__fem_pl__: {
            name: 'and/so + you [fem.pl.]',
            description: 'and/so + you [fem.pl.] CONJ IV2FP ',
            rules: [
                prefixInflection('فت', '', [], []),
            ],
        },
        will___you__fem_pl__: {
            name: 'will + you [fem.pl.]',
            description: 'will + you [fem.pl.] FUT IV2FP ',
            rules: [
                prefixInflection('ست', '', [], []),
            ],
        },
        and___will___you__fem_pl__: {
            name: 'and + will + you [fem.pl.]',
            description: 'and + will + you [fem.pl.] CONJ FUT IV2FP ',
            rules: [
                prefixInflection('وست', '', [], []),
            ],
        },
        and_so___will___you__fem_pl__: {
            name: 'and/so + will + you [fem.pl.]',
            description: 'and/so + will + you [fem.pl.] CONJ FUT IV2FP ',
            rules: [
                prefixInflection('فست', '', [], []),
            ],
        },
        for___it_them_her__to_: {
            name: 'for + it/them/her (to)',
            description: 'for + it/them/her (to) SUBJUNC IV3FS ',
            rules: [
                prefixInflection('لت', '', [], []),
            ],
        },
        and___for___it_them_her__to_: {
            name: 'and + for + it/them/her (to)',
            description: 'and + for + it/them/her (to) CONJ SUBJUNC IV3FS ',
            rules: [
                prefixInflection('ولت', '', [], []),
            ],
        },
        and_so___for___it_them_her__to_: {
            name: 'and/so + for + it/them/her (to)',
            description: 'and/so + for + it/them/her (to) CONJ SUBJUNC IV3FS ',
            rules: [
                prefixInflection('فلت', '', [], []),
            ],
        },
        for___you__m_c_sg____to_: {
            name: 'for + you [masc.sg.] (to)',
            description: 'for + you [masc.sg.] (to) SUBJUNC IV2MS ',
            rules: [
                prefixInflection('لت', '', [], []),
            ],
        },
        and___for___you__m_c_sg____to_: {
            name: 'and + for + you [masc.sg.] (to)',
            description: 'and + for + you [masc.sg.] (to) CONJ SUBJUNC IV2MS ',
            rules: [
                prefixInflection('ولت', '', [], []),
            ],
        },
        and_so___for___you__m_c_sg____to_: {
            name: 'and/so + for + you [masc.sg.] (to)',
            description: 'and/so + for + you [masc.sg.] (to) CONJ SUBJUNC IV2MS ',
            rules: [
                prefixInflection('فلت', '', [], []),
            ],
        },
        for___you__both___to_: {
            name: 'for + you (both) (to)',
            description: 'for + you (both) (to) SUBJUNC IV2D ',
            rules: [
                prefixInflection('لت', '', [], []),
            ],
        },
        and___for___you__both___to_: {
            name: 'and + for + you (both) (to)',
            description: 'and + for + you (both) (to) CONJ SUBJUNC IV2D ',
            rules: [
                prefixInflection('ولت', '', [], []),
            ],
        },
        and_so___for___you__both___to_: {
            name: 'and/so + for + you (both) (to)',
            description: 'and/so + for + you (both) (to) CONJ SUBJUNC IV2D ',
            rules: [
                prefixInflection('فلت', '', [], []),
            ],
        },
        for___them__both___fem_du____to_: {
            name: 'for + them (both) [fem.du.] (to)',
            description: 'for + them (both) [fem.du.] (to) SUBJUNC IV3FD ',
            rules: [
                prefixInflection('لت', '', [], []),
            ],
        },
        and___for___them__both___fem_du____to_: {
            name: 'and + for + them (both) [fem.du.] (to)',
            description: 'and + for + them (both) [fem.du.] (to) CONJ SUBJUNC IV3FD ',
            rules: [
                prefixInflection('ولت', '', [], []),
            ],
        },
        and_so___for___them__both___fem_du____to_: {
            name: 'and/so + for + them (both) [fem.du.] (to)',
            description: 'and/so + for + them (both) [fem.du.] (to) CONJ SUBJUNC IV3FD ',
            rules: [
                prefixInflection('فلت', '', [], []),
            ],
        },
        for___you__fem_sg____to_: {
            name: 'for + you [fem.sg.] (to)',
            description: 'for + you [fem.sg.] (to) SUBJUNC IV2FS ',
            rules: [
                prefixInflection('لت', '', [], []),
            ],
        },
        and___for___you__fem_sg____to_: {
            name: 'and + for + you [fem.sg.] (to)',
            description: 'and + for + you [fem.sg.] (to) CONJ SUBJUNC IV2FS ',
            rules: [
                prefixInflection('ولت', '', [], []),
            ],
        },
        and_so___for___you__fem_sg____to_: {
            name: 'and/so + for + you [fem.sg.] (to)',
            description: 'and/so + for + you [fem.sg.] (to) CONJ SUBJUNC IV2FS ',
            rules: [
                prefixInflection('فلت', '', [], []),
            ],
        },
        for___you__m_c_pl____to_: {
            name: 'for + you [masc.pl.] (to)',
            description: 'for + you [masc.pl.] (to) SUBJUNC IV2MP ',
            rules: [
                prefixInflection('لت', '', [], []),
            ],
        },
        and___for___you__m_c_pl____to_: {
            name: 'and + for + you [masc.pl.] (to)',
            description: 'and + for + you [masc.pl.] (to) CONJ SUBJUNC IV2MP ',
            rules: [
                prefixInflection('ولت', '', [], []),
            ],
        },
        and_so___for___you__m_c_pl____to_: {
            name: 'and/so + for + you [masc.pl.] (to)',
            description: 'and/so + for + you [masc.pl.] (to) CONJ SUBJUNC IV2MP ',
            rules: [
                prefixInflection('فلت', '', [], []),
            ],
        },
        for___you__fem_pl____to_: {
            name: 'for + you [fem.pl.] (to)',
            description: 'for + you [fem.pl.] (to) SUBJUNC IV2FP ',
            rules: [
                prefixInflection('لت', '', [], []),
            ],
        },
        and___for___you__fem_pl____to_: {
            name: 'and + for + you [fem.pl.] (to)',
            description: 'and + for + you [fem.pl.] (to) CONJ SUBJUNC IV2FP ',
            rules: [
                prefixInflection('ولت', '', [], []),
            ],
        },
        and_so___for___you__fem_pl____to_: {
            name: 'and/so + for + you [fem.pl.] (to)',
            description: 'and/so + for + you [fem.pl.] (to) CONJ SUBJUNC IV2FP ',
            rules: [
                prefixInflection('فلت', '', [], []),
            ],
        },
        I: {
            name: 'I',
            description: 'I IV1S ',
            rules: [
                prefixInflection('أ', '', [], []),
            ],
        },
        and___I: {
            name: 'and + I',
            description: 'and + I CONJ IV1S ',
            rules: [
                prefixInflection('وأ', '', [], []),
            ],
        },
        and_so___I: {
            name: 'and/so + I',
            description: 'and/so + I CONJ IV1S ',
            rules: [
                prefixInflection('فأ', '', [], []),
            ],
        },
        will___I: {
            name: 'will + I',
            description: 'will + I FUT IV1S ',
            rules: [
                prefixInflection('سأ', '', [], []),
            ],
        },
        and___will___I: {
            name: 'and + will + I',
            description: 'and + will + I CONJ FUT IV1S ',
            rules: [
                prefixInflection('وسأ', '', [], []),
            ],
        },
        and_so___will___I: {
            name: 'and/so + will + I',
            description: 'and/so + will + I CONJ FUT IV1S ',
            rules: [
                prefixInflection('فسأ', '', [], []),
            ],
        },
        for___me__to_: {
            name: 'for + me (to)',
            description: 'for + me (to) SUBJUNC IV1S ',
            rules: [
                prefixInflection('لأ', '', [], []),
            ],
        },
        and___for___me__to_: {
            name: 'and + for + me (to)',
            description: 'and + for + me (to) CONJ SUBJUNC IV1S ',
            rules: [
                prefixInflection('ولأ', '', [], []),
            ],
        },
        and_so___for___me__to_: {
            name: 'and/so + for + me (to)',
            description: 'and/so + for + me (to) CONJ SUBJUNC IV1S ',
            rules: [
                prefixInflection('فلأ', '', [], []),
            ],
        },
        we: {
            name: 'we',
            description: 'we IV1P ',
            rules: [
                prefixInflection('ن', '', [], []),
            ],
        },
        and___we: {
            name: 'and + we',
            description: 'and + we CONJ IV1P ',
            rules: [
                prefixInflection('ون', '', [], []),
            ],
        },
        and_so___we: {
            name: 'and/so + we',
            description: 'and/so + we CONJ IV1P ',
            rules: [
                prefixInflection('فن', '', [], []),
            ],
        },
        will___we: {
            name: 'will + we',
            description: 'will + we FUT IV1P ',
            rules: [
                prefixInflection('سن', '', [], []),
            ],
        },
        and___will___we: {
            name: 'and + will + we',
            description: 'and + will + we CONJ FUT IV1P ',
            rules: [
                prefixInflection('وسن', '', [], []),
            ],
        },
        and_so___will___we: {
            name: 'and/so + will + we',
            description: 'and/so + will + we CONJ FUT IV1P ',
            rules: [
                prefixInflection('فسن', '', [], []),
            ],
        },
        for___us__to_: {
            name: 'for + us (to)',
            description: 'for + us (to) SUBJUNC IV1P ',
            rules: [
                prefixInflection('لن', '', [], []),
            ],
        },
        and___for___us__to_: {
            name: 'and + for + us (to)',
            description: 'and + for + us (to) CONJ SUBJUNC IV1P ',
            rules: [
                prefixInflection('ولن', '', [], []),
            ],
        },
        and_so___for___us__to_: {
            name: 'and/so + for + us (to)',
            description: 'and/so + for + us (to) CONJ SUBJUNC IV1P ',
            rules: [
                prefixInflection('فلن', '', [], []),
            ],
        },
    },
};
