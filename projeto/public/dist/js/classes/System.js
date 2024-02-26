export default class System {
    _isMeeting;
    _lastDayMeeting;
    constructor({ isMeeting, lastDayMeeting }) {
        this._isMeeting = isMeeting;
        this._lastDayMeeting = lastDayMeeting;
    }
    informations() {
        const returnInfo = {
            isMeeting: this._isMeeting,
            lastDayMeeting: this._lastDayMeeting
        };
        return returnInfo;
    }
    get isMeeting() {
        return this._isMeeting;
    }
    get lastDayMeeting() {
        return this._lastDayMeeting;
    }
    set lastDayMeeting(value) {
        this._lastDayMeeting = value;
    }
    set isMeeting(value) {
        this._isMeeting = value;
    }
}
