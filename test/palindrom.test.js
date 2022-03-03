const palindrom = require('../palindrom');




describe('test palindromos', () => {
    const mockupTruthy = [
        'ana',
        'Oro.',
        'Orejero.',
        'Ojo.',
        'Rapar.?',
        'Rayar.',
        'Salas.',
        'Seres.',
        'Reconocer.',
    ];

    it('is palindrom', () => {
        mockupTruthy.forEach((word) => {
            expect(palindrom(word)).toBeTruthy();
        });
    });

    it('is not palindrom', () => {
        expect(palindrom('casa')).toBeFalsy();
    });
});
