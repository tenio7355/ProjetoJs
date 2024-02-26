import ISystem from "../interface/ISystem";

export default class System implements ISystem {

  private _isMeeting: boolean;
  private _lastDayMeeting: Date;
  
  constructor({ isMeeting, lastDayMeeting }: ISystem) {
    this._isMeeting = isMeeting
    this._lastDayMeeting = lastDayMeeting
  }
 
  informations() {
    const returnInfo = {
      isMeeting: this._isMeeting,
      lastDayMeeting: this._lastDayMeeting
    } as ISystem
    return returnInfo
  }

  public get isMeeting(): boolean {
    return this._isMeeting;
  }
  public get lastDayMeeting(): Date {
    return this._lastDayMeeting;
  }

  public set lastDayMeeting(value: Date) {
    this._lastDayMeeting = value;
  }
  public set isMeeting(value: boolean) {
    this._isMeeting = value;
  }
}