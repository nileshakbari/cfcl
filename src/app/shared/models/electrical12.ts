import { DecimalPipe } from '@angular/common';

export class Electrical12Model {

    TDATE: Date;

    N2: DecimalPipe;
    CH4: DecimalPipe;
    C2H6: DecimalPipe;
    CO2: DecimalPipe;
    C3H8: DecimalPipe;
    NC4H10: DecimalPipe;
    IC4H10: DecimalPipe;
    Molecular: DecimalPipe;
    Netcv: DecimalPipe;
    GrossCV: DecimalPipe;
    ZnoBed: DecimalPipe;
    H2S: DecimalPipe;

    // Electrical Master (PES001)
    // Main Condition
    E_COND_TYPE: string;
    E_COND: string;

    // Offsite Sub Condition
    DSP_E_COND: string;
    E_SUB_COND_DESC: string;
    E_ACT_PERCENT: DecimalPipe;
    E_UCT_PERCENT: DecimalPipe;
    E_WPT_PERCENT: DecimalPipe;
    E_DM_PERCENT: DecimalPipe;
    E_IAC_PERCENT: DecimalPipe;
    E_ETP_PERCENT: DecimalPipe;
    E_FS_PERCENT: DecimalPipe;

    // 3MVA Sub Condition
    DSP_E_COND_3MVA: string;
    // SPG Sub Condition
    E_CPP_PERCENT: DecimalPipe;
    E_AB_PERCENT: DecimalPipe;

    // Communicaton
    E_COMM_NAME: string;
    E_COMM_REMARK: string;
    E_STATUS: string;


    //  Electrical Daily Data Entry (PES002_RE2)
    //  Production
    E_GT1_INT: DecimalPipe;
    E_GT1_PROD: DecimalPipe;
    E_GT2_INT: DecimalPipe;
    E_GT2_PROD: DecimalPipe;
    E_GT1_EXPORT_GP3_ID: DecimalPipe;
    E_GT1_EXPORT_GP3: DecimalPipe;
    E_GT2_EXPORT_GP3_ID: DecimalPipe;
    E_GT2_EXPORT_GP3: DecimalPipe;
    E_TOT_GT_GEN: DecimalPipe;
    E_RSEB_INT: DecimalPipe;
    E_PUR_POWER_TOTAL: DecimalPipe;
    E_IEX_PURCHASED: DecimalPipe;
    E_RSEB_PURCHASED: DecimalPipe;
    E_REMARKS: DecimalPipe;

    //  GTG Consp.
    E_NAP_STORAGE_INT: DecimalPipe;
    E_NAP_STORAGE_CONSP: DecimalPipe;
    E_HOLDING_POND_INT: DecimalPipe;
    E_HOLDING_POND_CONSP: DecimalPipe;
    E_HOLDING_POND_INT2: DecimalPipe;
    E_HOLDING_POND_CONSP2: DecimalPipe;
    E_TFR_TO_EBUS: DecimalPipe;
    E_PWR_CONSP_E_LOAD: DecimalPipe;
    E_OFFSITE_CONSP: DecimalPipe;
    TXT_TOT_OFFSITE_CONSP: DecimalPipe;
    E_RECEIPT_UPH1_GP3: DecimalPipe;
    E_RECEIPT_UPH2_GP3: DecimalPipe;
    E_RECEIPT_UPH12_TOTAL: DecimalPipe;
    E_HOUSE_COL_INT: DecimalPipe;

    //  Purchase Power
    E_CIVIL_BLDG_INT: DecimalPipe;
    E_CIVIL_BLDG_CONSP: DecimalPipe;
    E_CIVIL_BLDG_CONSP_RATE: DecimalPipe;
    E_HOUSE_COL_CONSP: DecimalPipe;
    E_HOUSE_COL_CONSP_RATE: DecimalPipe;
    E_KSR_INT: DecimalPipe;
    E_KSR_CONSP: DecimalPipe;
    E_KSR_CONSP_RATE: DecimalPipe;
    E_WS_FENCELIGHT_INT: DecimalPipe;
    E_WS_FENCELIGHT_CONSP: DecimalPipe;
    E_WS_FENCELIGHT_CONSP_RATE: DecimalPipe;
    E_PUR_PWR_RW_INT: DecimalPipe;
    E_PUR_PWR_RW_CONSP: DecimalPipe;
    E_PUR_PWR_RW_CONSP_RATE: DecimalPipe;
    E_PUR_PWR_NAPSTRG_INT: DecimalPipe;
    E_PUR_PWR_NAPSTRG_CONSP: DecimalPipe;
    E_PUR_PWR_NAPSTRG_CONSP_RATE: DecimalPipe;
    E_PUR_PWR_3MVA_INT: DecimalPipe;
    E_PUR_PWR_3MVA_CONSP: DecimalPipe;
    E_PUR_PWR_3MVA_CONSP_RATE: DecimalPipe;
    E_PUR_PWR_SSP_INT: DecimalPipe;
    E_PUR_PWR_CONSP_SSP: DecimalPipe;
    E_PUR_PWR_SSP_CONSP_RATE: DecimalPipe;
    E_PUR_PWR_OTHER_INT: DecimalPipe;
    E_PUR_PWR_OTHER_CONSP: DecimalPipe;
    E_PUR_PWR_OTHER_CONSP_RATE: DecimalPipe;
    E_PUR_PWR_GP3_INT: DecimalPipe;
    E_PUR_PWR_GP3_CONSP: DecimalPipe;
    E_PUR_PWR_GP3_CONSP_RATE: DecimalPipe;
    E_TOT_NEBUS_CONSP: DecimalPipe;
    E_PWR_CONSP_NE_LOAD: DecimalPipe;
    E_PUR_PWR_RATE: DecimalPipe;
    E_PUR_PWR_UPHS1_INT: DecimalPipe;
    E_PUR_PWR_UPHS1_CONSP: DecimalPipe;
    E_PUR_PWR_UPHS1_CONSP_RATE: DecimalPipe;
    E_PUR_PWR_UPHS2_INT: DecimalPipe;
    E_PUR_PWR_UPHS2_CONSP: DecimalPipe;
    E_PUR_PWR_UPHS2_CONSP_RATE: DecimalPipe;
    E_LOSS_GEN: DecimalPipe;
    E_LOSS_RSEB: DecimalPipe;
    E_PUR_PWR_IND_LOAD: DecimalPipe;
    E_PUR_PWR_HOUSE_LOAD: DecimalPipe;
    E_PUR_PWR_CONSP_COND: DecimalPipe;
    E_PUR_PWR_AVL_BAL_LOAD: DecimalPipe;
    E_PUR_PWR_MAX_DEMAND: DecimalPipe;
    E_PUR_PWR_HOUSE_RDG_CORR: DecimalPipe;

    // SPG
    DSP_E_COND3: string;
    DSP_E_SUB_COND3_DESC: string;
    E_DUP_SPG_CONSP: DecimalPipe;
    E_AB_CONSP: DecimalPipe;
    E_CPP_CONSP: DecimalPipe;
    E_IAC_SPG_CONSP: DecimalPipe;

    // Offsite
    DSP_E_SUB_COND_DESC3: string;
    E_DUP_OFFSITE_CONSP: DecimalPipe;
    E_UCT_CONSP: DecimalPipe;
    E_WPT_CONSP: DecimalPipe;
    E_ACT_CONSP: DecimalPipe;
    E_IAC_OFFSITE_CONSP: DecimalPipe;
    E_DMP_CONSP: DecimalPipe;
    E_ETP_CONSP: DecimalPipe;
    E_FIRE_CONSP: DecimalPipe;

    // 3MVA Feeder
    TXT_E_COND: string;
    TXT_E_SUB_COND: string;
    E_DUP_OFFSITE_3MVA_CONSP: DecimalPipe;
    E_PUR_PWR_WPT_CONSP: DecimalPipe;
    E_PUR_PWR_DMP_CONSP: DecimalPipe;
    E_PUR_PWR_ETP_CONSP: DecimalPipe;
    E_PUR_PWR_ACT_CONSP: DecimalPipe;
    E_PUR_PWR_UCT_CONSP: DecimalPipe;
    E_PUR_PWR_IAC_CONSP: DecimalPipe;

    // Comm.
    COMMUNICATION_NAME: string;

}
