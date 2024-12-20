export interface IStockRankingData {
  hts_kor_isnm: string;
  data_rank: string;
  stck_prpr: string;
  prdy_vrss: string;
  prdy_vrss_sign: string;
  prdy_ctrt: string;
  acml_vol: string;

  mksc_shrn_iscd?: string;
  stck_shrn_iscd? :string;
  stck_hgpr?: string;
  hgpr_hour?: string;
  acml_hgpr_date?: string;
  stck_lwpr?: string;
  lwpr_hour?: string;
  acml_lwpr_date?: string;
  lwpr_vrss_prpr_rate?: string;
  dsgt_date_clpr_vrss_prpr_rate?: string;
  cnnt_ascn_dynu?: string;
  hgpr_vrss_prpr_rate?: string;
  cnnt_down_dynu?: string;
  oprc_vrss_prpr_sign?: string;
  oprc_vrss_prpr?: string;
  oprc_vrss_prpr_rate?: string;
  prd_rsfl?: string;
  prd_rsfl_rate?: string;
  
}


export interface IStockInfoProps {
  stockRankingData: IStockRankingData;
}