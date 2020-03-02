export interface Course {
    lv_detail?: string;
    lv_id?: string;
    lv_name?: string;
    lv_price?: string;
    lv_unit?: LvUnit;

    c_detail?:string;
    c_id?:string;
    c_name?:string;
    c_price?:string;
    course_name?:string;
    unit:LvUnit
}
export interface LvUnit {
    unit: Unit[];
}
export interface Unit {
    u_name?: string;
    u_detail?: string;
    u_id?: string;
    c_name?: string;
    c_detail?: string;
    c_id?: string;
}
