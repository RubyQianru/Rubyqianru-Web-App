export type Report = {
  symbol: string;
  mean_price: number;
  predict_price: number;
  dayHigh: number;
  dayLow: number;
  mean_vd_negative: number;
  mean_vd_neutral: number;
  time: string;
};

export type ReportBTC = {
  SMA_5: number;
  SMA_10: number;
  RSI: number;
  MACD: number;
  vd_neutral_mean: number;
  vd_negative_med: number;
  vd_neutral_med: number;
  vd_negative_mean: number;
  vd_positive_med: number;
  vd_compound_med: number;
  vd_compound_mean: number;
  vd_positive_mean: number;
  price: number;
  volume: number;
  dayHigh: number;
  dayLow: number;
  volatility: number;
  symbol: string;
  time: string;
  predict: string;
};
