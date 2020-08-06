import { expect } from 'chai';
import MessageApp from './app.js';

describe("app", function () {
    const testApp = new MessageApp;
    it("app has messages", function() {
        expect(testApp.messages).to.be.an('array')
    });
});