export type CareCategory = 'physical care' | 'live care' | 'attend hospital';

export type WorkTimes = Record<CareCategory, number>;

export type WorkReportStatus = 'pending' | 'done';

export type WorkReport = {
  /** 一意に判断するID */
  id: string;
  /** 状態 */
  status: WorkReportStatus;
  /** 作業時刻 */
  workPeriod: {
    /** 開始時刻 */
    start: Date;
    /** 終了時刻 */
    end: Date;
  };
  /** 単位数 */
  points: number;
  /** 作業時間 */
  workTimes: WorkTimes;
  /** 被介護者 */
  recipient: {
    /** 被介護者を一意に判断するID */
    id: string;
    /** 被介護者名 */
    name: string;
  };
};

export type WorkReportsEveryDate = {
  date: Date;
  reports: WorkReport[];
};
