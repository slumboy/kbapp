export interface Course {
    lv_detail: string;
    lv_id: string;
    lv_name: string;
    lv_price: string;
    lv_unit: LvUnit;
}
export interface LvUnit {
    unit: Unit[];
}
export interface Unit {
    u_name: string;
    u_detail: string;
    u_id: string;
}
