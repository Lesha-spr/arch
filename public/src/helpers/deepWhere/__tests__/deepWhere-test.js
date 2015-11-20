jest.dontMock('lodash');
jest.dontMock('./../deepWhere');

var deepWhere, _, nav, expected;

describe('deepWhere', function() {
    beforeEach(function() {
        expected = {
            "_id": "Design",
            "i18n": {
                "en": {
                    "title": "Design"
                },
                "ru": {
                    "title": "Дизайн"
                }
            },
            "type": "projects",
            "permalink": "/projects/design"
        };
        _ = require('lodash');
        deepWhere = require('./../deepWhere');
        nav = [
            {
                "_id": "About",
                "i18n": {
                    "en": {
                        "title": "About"
                    },
                    "ru": {
                        "title": "Про Ткача"
                    }
                },
                "permalink": "/about"
            },
            {
                "_id": "Design",
                "i18n": {
                    "en": {
                        "title": "Design"
                    },
                    "ru": {
                        "title": "Дизайн"
                    }
                },
                "type": "projects",
                "permalink": "/projects/design"
            }
        ];
    });

    it('should return empty array out of find', function() {
        let returned = deepWhere(nav, {test: 'test'});

        expect(returned).toEqual([]);
    });

    it('should return consistent array', function() {
        let returned = deepWhere(nav, {type: 'projects'});

        expect(_.isEqual(returned, [expected])).toBe(true);
    });
});
