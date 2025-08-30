// Auto-generated. Do not edit manually.

import type { DirectusFile, DirectusRole, DirectusUser } from "@directus/sdk";

interface DatabaseSchema {
  FIDT_setting: FIDTSetting[];
  asset_transaction: AssetTransaction[];
  assumption: Assumption[];
  assumption_params: AssumptionParams[];
  bao_hiem: BaoHiem[];
  bao_hiem_nhan_tho: BaoHiemNhanTho[];
  bao_hiem_nt_san_co: BaoHiemNtSanCo[];
  bao_hiem_suc_khoe: BaoHiemSucKhoe[];
  bao_hiem_suc_khoe_v2: BaoHiemSucKhoeV2[];
  bat_dong_san: BatDongSan[];
  cac_khoan_no: CacKhoanNo[];
  cac_khoan_no_gan_voi_tai_san: CacKhoanNoGanVoiTaiSan[];
  cac_khoan_no_tai_san_the_chap: CacKhoanNoTaiSanTheChap[];
  chi_tiet_bds: ChiTietBds[];
  chi_tieu: ChiTieu[];
  chung_chi_quy: ChungChiQuy[];
  clone_data: CloneData[];
  co_phieu: CoPhieu[];
  contract: Contract[];
  contract_files: ContractFiles[];
  contract_profile: ContractProfile[];
  customer: Customer[];
  customer_private_data: CustomerPrivateData[];
  customer_private_data_access_requests: CustomerPrivateDataAccessRequests[];
  customer_private_data_access_requests_directus_users: CustomerPrivateDataAccessRequestsDirectusUsers[];
  customer_profile: CustomerProfile[];
  customer_profile_clone_data: CustomerProfileCloneData[];
  danh_muc_dau_tu: DanhMucDauTu[];
  danh_muc_phan_tich: DanhMucPhanTich[];
  deal: Deal[];
  deal_bao_hiem: DealBaoHiem[];
  deal_cac_khoan_no: DealCacKhoanNo[];
  deal_kich_ban_dong_tien: DealKichBanDongTien[];
  deal_phan_tich_nhu_cau: DealPhanTichNhuCau[];
  deal_tai_san: DealTaiSan[];
  deal_w_chi_tieu: DealWChiTieu[];
  deal_w_thu_nhap: DealWThuNhap[];
  debt_transaction: DebtTransaction[];
  document: Document[];
  document_files: DocumentFiles[];
  docx_mapping: DocxMapping[];
  dropdown_options: DropdownOptions[];
  du_lieu_phan_tich: DuLieuPhanTich[];
  expense_transaction: ExpenseTransaction[];
  fml_code: FmlCode[];
  form_metadata: FormMetadata[];
  formula: Formula[];
  free_documents: FreeDocuments[];
  free_documents_files: FreeDocumentsFiles[];
  free_service_documents: FreeServiceDocuments[];
  free_tham_dinh_danh_muc_tai_san: FreeThamDinhDanhMucTaiSan[];
  gia_tri_hoan_lai_hop_dong_bao_hiem: GiaTriHoanLaiHopDongBaoHiem[];
  ho_so_phan_tich: HoSoPhanTich[];
  income_transaction: IncomeTransaction[];
  khach_hang: KhachHang[];
  khach_hang_files: KhachHangFiles[];
  khau_vi_rui_ro: KhauViRuiRo[];
  kich_ban_dong_tien: KichBanDongTien[];
  kich_ban_dong_tien_assumption: KichBanDongTienAssumption[];
  kich_ban_dong_tien_transactions: KichBanDongTienTransactions[];
  kich_ban_phan_tich_ncbh: KichBanPhanTichNcbh[];
  kich_ban_phan_tich_ncbh_bao_hiem_nt_san_co: KichBanPhanTichNcbhBaoHiemNtSanCo[];
  kich_ban_phan_tich_ncbh_nguon_tai_chinh_khac: KichBanPhanTichNcbhNguonTaiChinhKhac[];
  kich_ban_phan_tich_ncbh_nv_tra_no_cua_hgd: KichBanPhanTichNcbhNvTraNoCuaHgd[];
  kich_ban_phan_tich_ncbh_tong_tich_luy: KichBanPhanTichNcbhTongTichLuy[];
  mail_templates: MailTemplates[];
  ngoai_te: NgoaiTe[];
  nguoi_phu_thuoc: NguoiPhuThuoc[];
  nguon_tai_chinh_khac: NguonTaiChinhKhac[];
  no: No[];
  nv_tra_no_cua_hgd: NvTraNoCuaHgd[];
  nv_tra_no_cua_hgd_cac_khoan_no: NvTraNoCuaHgdCacKhoanNo[];
  params: Params[];
  pbi_config: PbiConfig[];
  pbi_dashboard: PbiDashboard[];
  pbi_dashboard_directus_roles: PbiDashboardDirectusRoles[];
  pbi_filter_rules: PbiFilterRules[];
  permission: Permission[];
  personal_info: PersonalInfo[];
  phan_tich_nhu_cau: PhanTichNhuCau[];
  phan_tich_nhu_cau_kich_ban_ptncbh: PhanTichNhuCauKichBanPtncbh[];
  phan_tich_nhu_cau_kich_ban_ptncbh_1: PhanTichNhuCauKichBanPtncbh1[];
  phan_tich_nhu_cau_su_kien_bao_hiem_trong_yeu: PhanTichNhuCauSuKienBaoHiemTrongYeu[];
  phan_tich_nhu_cau_su_kien_bao_hiem_trong_yeu_1: PhanTichNhuCauSuKienBaoHiemTrongYeu1[];
  profile: Profile[];
  profile_assets: ProfileAssets[];
  profile_cac_khoan_no: ProfileCacKhoanNo[];
  profile_document: ProfileDocument[];
  profile_insurance: ProfileInsurance[];
  profile_kich_ban_dong_tien: ProfileKichBanDongTien[];
  profile_phan_tich_nhu_cau: ProfilePhanTichNhuCau[];
  profile_w_chi_tieu: ProfileWChiTieu[];
  profile_w_thu_nhap: ProfileWThuNhap[];
  quyen_loi_bhnt: QuyenLoiBhnt[];
  quyen_loi_bhsk: QuyenLoiBhsk[];
  quyen_loi_bo_tro_bhsk: QuyenLoiBoTroBhsk[];
  resource: Resource[];
  role: Role[];
  role_mapping: RoleMapping[];
  role_mapping_directus_users: RoleMappingDirectusUsers[];
  role_permission: RolePermission[];
  rui_ro: RuiRo[];
  san_pham_bo_tro_bhnt: SanPhamBoTroBhnt[];
  san_pham_bo_tro_bhsk: SanPhamBoTroBhsk[];
  setting: Setting[];
  su_kien_bao_hiem_trong_yeu: SuKienBaoHiemTrongYeu[];
  su_kien_bao_hiem_trong_yeu_bao_hiem_sinh_menh: SuKienBaoHiemTrongYeuBaoHiemSinhMenh[];
  tai_san: TaiSan[];
  tai_san_khac: TaiSanKhac[];
  thay_the_thu_nhap_ntc: ThayTheThuNhapNtc[];
  thu_nhap: ThuNhap[];
  tien_cho_vay: TienChoVay[];
  tien_gui: TienGui[];
  tien_mat: TienMat[];
  to_tu_van: ToTuVan[];
  to_tu_van_directus_users: ToTuVanDirectusUsers[];
  tong_tich_luy: TongTichLuy[];
  tong_tich_luy_tai_san: TongTichLuyTaiSan[];
  trai_phieu: TraiPhieu[];
  transaction: Transaction[];
  vang: Vang[];
  von_gop: VonGop[];
  von_gop_doanh_nghiep: VonGopDoanhNghiep[];
  w_chi_tieu: WChiTieu[];
  w_chi_tieu_gan_voi_tai_san: WChiTieuGanVoiTaiSan[];
  w_khach_hang: WKhachHang[];
  w_khach_hang_cac_khoan_no: WKhachHangCacKhoanNo[];
  w_khach_hang_tai_san: WKhachHangTaiSan[];
  w_thu_nhap: WThuNhap[];
  w_thu_nhap_gan_voi_tai_san: WThuNhapGanVoiTaiSan[];
}

interface FIDTSetting {
  id: number;
  defaultAssumptions: Record<string, any> | null;
}

interface AssetTransaction {
  id: string;
  asset: Record<string, any> | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  quantity: number | null;
  totalValue: string | null;
  transactionTime: 'datetime' | null;
  transactionType: string | null;
  unitPrice: string | null;
  user_created: string | null;
  user_updated: string | null;
  meta: string | null;
  sell_action: string | null;
}

interface Assumption {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  end_time: Date | null;
  name: string | null;
  start_time: Date | null;
  filter: Record<string, any> | null;
  param_value: number | null;
  target_param: string | null;
  type: string | null;
}

interface AssumptionParams {
  id: number;
  assumption_id: string | null;
  params_id: string | null;
}

interface BaoHiem {
  id: string;
  user_created: string | null;
  date_created: 'datetime' | null;
  user_updated: string | null;
  date_updated: 'datetime' | null;
  loai_bao_hiem: string | null;
  ten_san_pham: string | null;
  phi_dong: number | null;
  nguoi_duoc_bao_hiem: string | null;
  ql_ngoai_tru: string | null;
  ql_noi_tru: string | null;
  ql_nha_khoa: string | null;
  quyen_loi: string | null;
  nguoi_thu_huong: string | null;
  khach_hang: string | null;
  cong_ty_bao_hiem: string | null;
  gia_tri_bao_hiem: number | null;
  ghi_chu: string | null;
  chu_ky: string | null;
}

interface BaoHiemNhanTho {
  id: string;
  ben_mua_bao_hiem: string | null;
  doanh_nghiep_bao_hiem: string | null;
  gia_tri_hoan_lai_hop_dong: Record<string, any> | null;
  hieu_luc: boolean | null;
  khach_hang: string | null;
  loai_san_pham: string | null;
  loai_tru_va_tang_phi: string | null;
  ma_hop_dong: string | null;
  meta: string | null;
  moi_quan_he_cua_NDBH_voi_BMBH: string | null;
  moi_quan_he_cua_NTH_voi_BMBH: string | null;
  nguoi_duoc_bao_hiem: string | null;
  nguoi_thu_huong: string | null;
  phi_bao_hiem_nam: string | null;
  quy_lien_ket_don_vi: Record<string, any> | null;
  quyen_loi_san_pham_chinh: string | null;
  so_tien_bao_hiem: string | null;
  tan_suat_dong_phi: string | null;
  ten_san_pham: string | null;
  thoi_han_dong_phi: Record<string, any> | null;
  thoi_han_hop_dong: Record<string, any> | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
  khong_ke_khai_chi_tiet: boolean | null;
  nguoi_thu_huong_list: Record<string, any> | null;
  phan_tram_thu_huong: number | null;
  tong_phi_bao_hiem_nam: string | null;
  ghi_chu: string | null;
  isDeleted: boolean | null;
}

interface BaoHiemNtSanCo {
  id: string;
  bao_hiem_nt: string | null;
  bao_hiem_sinh_menh: string | null;
  benh_ly_nguyen_trong: string | null;
  ten_bao_hiem_nt: string | null;
  thuong_tat_toan_bo_vinh_vien: string | null;
}

interface BaoHiemSucKhoe {
  id: number;
  meta: Record<string, any> | null;
  ben_mua_bao_hiem: string | null;
  doanh_nghiep_bao_hiem: string | null;
  hieu_luc: boolean | null;
  khach_hang: string | null;
  khong_ke_khai_chi_tiet: boolean | null;
  loai_tru_va_tang_phi: string | null;
  pham_vi_dia_ly_duoc_bao_hiem: string | null;
  spbt_cua_bhnt: string | null;
  tan_suat_dong_phi: string | null;
  ten_san_pham: string | null;
  thoi_gian_cho: string | null;
  thoi_han_hop_dong: Record<string, any> | null;
  tong_phi_bao_hiem_nam: number | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
}

interface BaoHiemSucKhoeV2 {
  id: string;
  ben_mua_bao_hiem: string | null;
  doanh_nghiep_bao_hiem: string | null;
  hieu_luc: string | null;
  isDeleted: boolean;
  khach_hang: string | null;
  khong_ke_khai_chi_tiet: boolean | null;
  loai_tru_va_tang_phi: string | null;
  meta: Record<string, any> | null;
  pham_vi_dia_ly_duoc_bao_hiem: string | null;
  tan_suat_dong_phi: string | null;
  ten_san_pham: string | null;
  thoi_gian_cho: string | null;
  thoi_han_hop_dong: string | null;
  tong_phi_bao_hiem_nam: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
  hieu_luc_v2: boolean | null;
  spbt_cua_bhnt: string | null;
}

interface BatDongSan {
  id: string;
  da_co_so: boolean | null;
  da_hoan_cong: boolean | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  gia_mua: string | null;
  gia_tri_hien_tai: string | null;
  gia_tri_luc_mua: string | null;
  loai: string | null;
  quyen_so_huu: string | null;
  thoi_diem_mua: 'datetime' | null;
  thong_tin_can_ho: string | null;
  thong_tin_cong_trinh_xay_dung_khac: string | null;
  thong_tin_nha: string | null;
  thong_tin_thua_dat: string | null;
  tong_gia_tri: string | null;
  user_created: string | null;
  user_updated: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
  noi_o_chinh: boolean | null;
}

interface CacKhoanNo {
  id: string;
  chu_no: string | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  du_no_ban_dau: string | null;
  du_no_hien_tai: string | null;
  ghi_chu: string | null;
  hinh_thuc_loai_lai_suat: string | null;
  hinh_thuc_tra_lai: string | null;
  hinh_thuc_vay: string | null;
  lai_suat: number | null;
  lai_suat_trung_binh_sau_uu_dai: number | null;
  loai_lai_suat: string | null;
  loai_no: string | null;
  loai_tai_san_the_chap: string | null;
  nguoi_no: string | null;
  so_tien_vay_no: string | null;
  tan_suat_tra_no: string | null;
  ten_khoan_no: string | null;
  thoi_diem_giai_ngan: 'datetime' | null;
  thoi_han_lai_suat_uu_dai: number | null;
  thoi_han_phai_tra_no_con_lai: number | null;
  thoi_han_vay: number | null;
  thoi_han_vay_theo: string | null;
  tien_tra_no_dinh_ki: string | null;
  user_created: string | null;
  user_updated: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
  lai_suat_co_dinh: number | null;
  lai_suat_uu_dai: number | null;
  phan_loai_no: string | null;
  thoi_diem_dao_han: 'datetime' | null;
  lai_suat_sau_uu_dai: number | null;
  thoi_diem_ket_thuc_uu_dai: 'datetime' | null;
  tai_san_the_chap: number[] | CacKhoanNoTaiSanTheChap[];
}

interface CacKhoanNoGanVoiTaiSan {
  id: number;
  cac_khoan_no_id: string | null | CacKhoanNo;
  collection: string | null | "bat_dong_san" | "chung_chi_quy" | "co_phieu" | "gia_tri_hoan_lai_hop_dong_bao_hiem" | "ngoai_te" | "tai_san_khac" | "tien_gui" | "trai_phieu" | "vang" | "von_gop";
  item: string | null | BatDongSan | ChungChiQuy | CoPhieu | GiaTriHoanLaiHopDongBaoHiem | NgoaiTe | TaiSanKhac | TienGui | TraiPhieu | Vang | VonGop;
}

interface CacKhoanNoTaiSanTheChap {
  id: number;
  cac_khoan_no_id: string | null | CacKhoanNo;
  collection: string | null | "bat_dong_san" | "chung_chi_quy" | "co_phieu" | "gia_tri_hoan_lai_hop_dong_bao_hiem" | "ngoai_te" | "tai_san_khac" | "tien_gui" | "trai_phieu" | "vang" | "von_gop";
  item: string | null | BatDongSan | ChungChiQuy | CoPhieu | GiaTriHoanLaiHopDongBaoHiem | NgoaiTe | TaiSanKhac | TienGui | TraiPhieu | Vang | VonGop;
}

interface ChiTietBds {
  id: string;
  block: string | null;
  dia_chi: string | null;
  dien_tich_dat: number | null;
  dien_tich_san: number | null;
  dien_tich_xay_dung: number | null;
  duc: string | null;
  ghi_chu: string | null;
  gia_tri_noi_that: string | null;
  huong: string | null;
  muc_dich_su_dung: string | null;
  nguon_goc_su_dung: string | null;
  so_huu_chung: number | null;
  so_huu_rieng: number | null;
  so_phong_ngu: number | null;
  so_phong_tam: string | null;
  so_tang: number | null;
  su_dung_chung: number | null;
  su_dung_rieng: number | null;
  tang: string | null;
  ten_du_an: string | null;
  thoi_han_so_huu: string | null;
  thoi_han_su_dung: string | null;
  thong_thuy: number | null;
  thua_dat_so: string | null;
  tim_tuong: number | null;
  to_ban_do_so: string | null;
  view_quan_canh: string | null;
  dien_tich_thua_dat: number | null;
}

interface ChiTieu {
  id: string;
  user_created: string | null;
  date_created: 'datetime' | null;
  user_updated: string | null;
  date_updated: 'datetime' | null;
  loai_chi_tieu: string | null;
  loai_chi_phi: string | null;
  so_tien: number | null;
  ghi_chu: string | null;
  khach_hang: string | null;
  nguoi_chi: string | null;
}

interface ChungChiQuy {
  id: string;
  cong_ty_quan_ly_quy: string | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  ghi_chu: string | null;
  gia_mua: string | null;
  gia_tri_hien_tai: string | null;
  gia_tri_luc_mua: string | null;
  loai_quy: string | null;
  ma_quy: string | null;
  quyen_so_huu: string | null;
  so_luong: number | null;
  ten_quy: string | null;
  thoi_diem_mua: 'datetime' | null;
  tong_gia_tri: string | null;
  user_created: string | null;
  user_updated: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
}

interface CloneData {
  id: string;
  data: Record<string, any> | null;
  extra_info: Record<string, any> | null;
  origin_id: string | null;
  status: string | null;
  type: string | null;
}

interface CoPhieu {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  ghi_chu: string | null;
  gia_mua: string | null;
  gia_tri_hien_tai: string | null;
  gia_tri_luc_mua: string | null;
  giao_dich_tai_cong_ty_chung_khoan: string | null;
  ma_co_phieu: string | null;
  quyen_so_huu: string | null;
  so_luong: number | null;
  thoi_diem_mua: 'datetime' | null;
  tong_gia_tri: string | null;
  user_created: string | null;
  user_updated: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
}

interface Contract {
  id: string;
  code: string | null;
  consultant: string | null;
  customer: string | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  end_date: Date | null;
  item_status: string | null;
  reference_source: string | null;
  responsible_team: number | null;
  review_date: Date | null;
  service_type: string | null;
  sort: number | null;
  start_date: Date | null;
  status: string | null;
  update_frequency: string | null;
  note: string | null;
  creator: string | null;
  from_other_source: boolean | null;
  other_ref_source: string | null;
  ref_source: string | null;
  attachments: number[] | ContractFiles[];
  linked_profiles: number[] | ContractProfile[];
}

interface ContractFiles {
  id: number;
  contract_id: string | null | Contract;
  directus_files_id: string | null | DirectusFile;
}

interface ContractProfile {
  id: number;
  contract_id: string | null | Contract;
  profile_id: string | null | Profile;
}

interface Customer {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  item_status: string | null;
  personal_info: string | null;
  sort: number | null;
  creator: string | null;
  loai_khach_hang: string | null;
}

interface CustomerPrivateData {
  id: string;
  excludes: string | null;
  field: string | null;
  mask_rule: string;
}

interface CustomerPrivateDataAccessRequests {
  id: string;
  approved_date: Date | null;
  approver: string | null;
  code: string | null;
  customer: string | null;
  description: string | null;
  detail: string | null;
  profile: string | null;
  requested_date: 'datetime' | null;
  requester: string | null;
  status: string;
  status_log: string | null;
  relate_people: number[] | CustomerPrivateDataAccessRequestsDirectusUsers[];
}

interface CustomerPrivateDataAccessRequestsDirectusUsers {
  id: number;
  customer_private_data_access_requests_id: string | null | CustomerPrivateDataAccessRequests;
  directus_users_id: string | null | DirectusUser;
}

interface CustomerProfile {
  id: string;
  kha_nang_chiu_dung_rui_ro_chung: string | null;
  kha_nang_chiu_dung_rui_ro_kh1: string | null;
  kha_nang_chiu_dung_rui_ro_kh2: string | null;
  khau_vi_rui_ro_chung: string | null;
  khau_vi_rui_ro_kh1: string | null;
  khau_vi_rui_ro_kh2: string | null;
  tuoi_huu_kh1: number | null;
  tuoi_huu_kh2: number | null;
  clone_data: number[] | CustomerProfileCloneData[];
}

interface CustomerProfileCloneData {
  id: number;
  clone_data_id: string | null | CloneData;
  customer_profile_id: string | null | CustomerProfile;
}

interface DanhMucDauTu {
  id: number;
  deal_id: string | null;
  id_tai_san: string | null;
  percent: string | null;
  value: string | null;
}

interface DanhMucPhanTich {
  id: string;
  danh_gia: string | null;
  ho_so_phan_tich: string | null;
  ket_luan: string | null;
  ma_danh_muc: string | null;
  ten_danh_muc: string | null;
}

interface Deal {
  id: string;
  biet_den_fidt_qua: string | null;
  co_su_dung_the_tin_dung: boolean | null;
  co_thanh_toan_day_du_du_no_dung_han: boolean | null;
  co_tung_xay_ra_tinh_trang_no_qua_han: boolean | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  khach_hang: string | null;
  loai_deal: string | null;
  ngay_bat_dau: 'datetime' | null;
  ngay_ket_thuc: 'datetime' | null;
  ngay_review_hop_dong: 'datetime' | null;
  nguoi_tu_van: string | null;
  to_tu_van: number | null;
  user_created: string | null;
  user_updated: string | null;
  bao_hiem: number[] | DealBaoHiem[];
  cac_kich_ban_dong_tien: number[] | DealKichBanDongTien[];
  chi_tieu: number[] | DealWChiTieu[];
  no: number[] | DealCacKhoanNo[];
  phan_tich_nhu_cau_bao_hiem: number[] | DealPhanTichNhuCau[];
  tai_san: number[] | DealTaiSan[];
  thu_nhap: number[] | DealWThuNhap[];
}

interface DealBaoHiem {
  id: number;
  collection: string | null | "bao_hiem_nhan_tho";
  deal_id: string | null | Deal;
  item: string | null | BaoHiemNhanTho;
}

interface DealCacKhoanNo {
  id: number;
  cac_khoan_no_id: string | null | CacKhoanNo;
  deal_id: string | null | Deal;
}

interface DealKichBanDongTien {
  id: number;
  deal_id: string | null | Deal;
  kich_ban_dong_tien_id: string | null | KichBanDongTien;
}

interface DealPhanTichNhuCau {
  id: number;
  deal_id: string | null | Deal;
  phan_tich_nhu_cau_id: string | null | PhanTichNhuCau;
}

interface DealTaiSan {
  id: number;
  collection: string | null | "bat_dong_san" | "chung_chi_quy" | "co_phieu" | "gia_tri_hoan_lai_hop_dong_bao_hiem" | "ngoai_te" | "tai_san_khac" | "tien_gui" | "tien_mat" | "trai_phieu" | "vang" | "von_gop";
  deal_id: string | null | Deal;
  item: string | null | BatDongSan | ChungChiQuy | CoPhieu | GiaTriHoanLaiHopDongBaoHiem | NgoaiTe | TaiSanKhac | TienGui | TienMat | TraiPhieu | Vang | VonGop;
}

interface DealWChiTieu {
  id: number;
  deal_id: string | null | Deal;
  w_chi_tieu_id: string | null | WChiTieu;
}

interface DealWThuNhap {
  id: number;
  deal_id: string | null | Deal;
  w_thu_nhap_id: string | null | WThuNhap;
}

interface DebtTransaction {
  id: string;
  amount: string | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  debt: Record<string, any> | null;
  transactionTime: 'datetime' | null;
  transactionType: string | null;
  user_created: string | null;
  user_updated: string | null;
}

interface Document {
  id: string;
  createdAt: 'datetime' | null;
  createdBy: string | null;
  documentName: string | null;
  documentType: string | null;
  notes: string | null;
  sort: number | null;
  status: string | null;
  updatedAt: 'datetime' | null;
  updatedBy: string | null;
  attachments: number[] | DocumentFiles[];
  profiles: number[] | ProfileDocument[];
}

interface DocumentFiles {
  id: number;
  directus_files_id: string | null | DirectusFile;
  document_id: string | null | Document;
}

interface DocxMapping {
  id: string;
  chi_tieu: Record<string, any> | null;
  thu_nhap: Record<string, any> | null;
}

interface DropdownOptions {
  id: string;
  code: Record<string, any> | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  name: string | null;
  user_created: string | null;
  user_updated: string | null;
}

interface DuLieuPhanTich {
  id: string;
  danh_muc_phan_tich: string | null;
  ghi_chu: string | null;
  gia_tri: string | null;
  gia_tri_kh2: string | null;
  ma_du_lieu: string | null;
  ten_du_lieu: string | null;
}

interface ExpenseTransaction {
  id: string;
  expense: Record<string, any> | null;
  totalValue: number | null;
  transactionTime: 'datetime' | null;
}

interface FmlCode {
  id: string;
  code: string | null;
  decription: string | null;
  version: string | null;
}

interface FormMetadata {
  id: string;
  code: Record<string, any> | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  description: string | null;
  name: string | null;
  user_created: string | null;
  user_updated: string | null;
}

interface Formula {
  id: string;
  dataDefs: Record<string, any> | null;
  description: string | null;
  formula: string | null;
  key: string | null;
}

interface FreeDocuments {
  id: string;
  document_name: string | null;
  document_type: string | null;
  ghi_chu: string | null;
  updated_at: 'datetime' | null;
  service: number[] | FreeServiceDocuments[];
  attachments: number[] | FreeDocumentsFiles[];
}

interface FreeDocumentsFiles {
  id: number;
  directus_files: string | null | DirectusFile;
  free_documents: string | null | FreeDocuments;
}

interface FreeServiceDocuments {
  id: number;
  document_id: string | null | FreeDocuments;
  service_type: string | null | "free_tham_dinh_danh_muc_tai_san";
  service: string | null | FreeThamDinhDanhMucTaiSan;
}

interface FreeThamDinhDanhMucTaiSan {
  id: string;
  bat_dong_san_dau_tu: string | null;
  bat_dong_san_dau_tu_computed: string | null;
  bat_dong_san_dau_tu_kh2: string | null;
  bat_dong_san_dau_tu_kh3: string | null;
  bat_dong_san_noi_o_chinh: string | null;
  bat_dong_san_noi_o_chinh_computed: string | null;
  bat_dong_san_noi_o_chinh_kh2: string | null;
  bat_dong_san_noi_o_chinh_kh3: string | null;
  bhnt: string | null;
  bhsk: string | null;
  bhyt_va_bhxh: string | null;
  chi_tieu_thang: string | null;
  chi_tieu_thang_computed: string | null;
  chi_tieu_thang_kh2: string | null;
  chi_tieu_thang_kh3: string | null;
  chung_chi_quy: string | null;
  chung_chi_quy_computed: string | null;
  chung_chi_quy_kh2: string | null;
  chung_chi_quy_kh3: string | null;
  co_khach_hang_2: boolean | null;
  co_phieu: string | null;
  co_phieu_computed: string | null;
  co_phieu_kh2: string | null;
  co_phieu_kh3: string | null;
  cong_viec: string | null;
  cong_viec_kh2: string | null;
  date_updated: 'datetime' | null;
  email: string | null;
  first_name: string | null;
  first_name_kh2: string | null;
  ghi_chu_khach_hang: string | null;
  ghi_chu_nguoi_phu_thuoc_tai_chinh: string | null;
  gioi_tinh: string | null;
  gioi_tinh_kh2: string | null;
  is_deleted: boolean | null;
  kinh_nghiem_va_so_thich_dau_tu: string | null;
  kinh_nghiem_va_so_thich_dau_tu_kh2: string | null;
  lai_suat_cac_khoan_vay: string | null;
  lai_suat_cac_khoan_vay_kh2: string | null;
  lai_suat_cac_khoan_vay_kh3: string | null;
  lai_suat_vay_kh3: string | null;
  last_name: string | null;
  last_name_kh2: string | null;
  loai_san_pham: string | null;
  loi_nhuan_ky_vong: string | null;
  loi_nhuan_ky_vong_kh2: string | null;
  middle_name: string | null;
  middle_name_kh2: string | null;
  nam_sinh: Date | null;
  nam_sinh_kh2: Date | null;
  ngay_tu_van: Date | null;
  ngoai_te: string | null;
  ngoai_te_computed: string | null;
  ngoai_te_kh2: string | null;
  ngoai_te_kh3: string | null;
  nguoi_phu_thuoc_tai_chinh: Record<string, any> | null;
  nguoi_tu_van: string | null;
  nguyen_vong_cong_viec_tuong_lai: string | null;
  nguyen_vong_cong_viec_tuong_lai_kh2: string | null;
  no_khac: string | null;
  no_khac_computed: string | null;
  no_khac_kh2: string | null;
  no_khac_kh3: string | null;
  noi_o_hien_tai: string | null;
  noi_o_hien_tai_kh2: string | null;
  phan_tich_lai_suat_cac_khoan_vay: string | null;
  phone_number: string | null;
  quy_du_phong: string | null;
  tai_san_khac: string | null;
  tai_san_khac_computed: string | null;
  tai_san_khac_kh2: string | null;
  tai_san_khac_kh3: string | null;
  the_tin_dung: string | null;
  the_tin_dung_computed: string | null;
  the_tin_dung_kh2: string | null;
  the_tin_dung_kh3: string | null;
  tien_cho_vay: string | null;
  tien_cho_vay_computed: string | null;
  tien_cho_vay_kh2: string | null;
  tien_cho_vay_kh3: string | null;
  tien_gui_ky_han: string | null;
  tien_gui_ky_han_computed: string | null;
  tien_gui_ky_han_kh2: string | null;
  tien_gui_ky_han_kh3: string | null;
  tien_mat: string | null;
  tien_mat_computed: string | null;
  tien_mat_kh2: string | null;
  tien_mat_kh3: string | null;
  tinh_can_bang_ve_thanh_khoan: string | null;
  tinh_da_dang: string | null;
  tinh_hieu_qua_ve_ti_suat_sinh_loi: string | null;
  tinh_on_dinh_cua_thu_nhap: string | null;
  tinh_on_dinh_cua_thu_nhap_kh2: string | null;
  tinh_toi_uu_ve_rui_ro: string | null;
  tinh_trang_hon_nhan: string | null;
  tong_thu_nhap_thang: string | null;
  tong_thu_nhap_thang_computed: string | null;
  tong_thu_nhap_thang_kh2: string | null;
  tong_thu_nhap_thang_kh3: string | null;
  tra_no_vay_thang: string | null;
  tra_no_vay_thang_computed: string | null;
  tra_no_vay_thang_kh2: string | null;
  tra_no_vay_thang_kh3: string | null;
  trai_phieu: string | null;
  trai_phieu_computed: string | null;
  trai_phieu_kh2: string | null;
  trai_phieu_kh3: string | null;
  tssl_bat_dong_san_dau_tu: string | null;
  tssl_bat_dong_san_noi_o_chinh: string | null;
  tssl_chung_chi_quy: string | null;
  tssl_co_phieu: string | null;
  tssl_ngoai_te: string | null;
  tssl_tai_san_khac: string | null;
  tssl_tien_cho_vay: string | null;
  tssl_tien_gui_ky_han: string | null;
  tssl_tien_mat: string | null;
  tssl_trai_phieu: string | null;
  tssl_vang: string | null;
  tssl_von_gop_kinh_doanh: string | null;
  user_updated: string | null;
  vang: string | null;
  vang_computed: string | null;
  vang_kh2: string | null;
  vang_kh3: string | null;
  vay_nguoi_than: string | null;
  vay_nguoi_than_computed: string | null;
  vay_nguoi_than_kh2: string | null;
  vay_nguoi_than_kh3: string | null;
  vay_the_chap: string | null;
  vay_the_chap_computed: string | null;
  vay_the_chap_kh2: string | null;
  vay_the_chap_kh3: string | null;
  vay_tin_chap: string | null;
  vay_tin_chap_computed: string | null;
  vay_tin_chap_kh2: string | null;
  vay_tin_chap_kh3: string | null;
  von_gop_kinh_doanh: string | null;
  von_gop_kinh_doanh_computed: string | null;
  von_gop_kinh_doanh_kh2: string | null;
  von_gop_kinh_doanh_kh3: string | null;
  yeu_to_no_vay: string | null;
  chung_chi_quy_trai_phieu: string | null;
  chung_chi_quy_trai_phieu_computed: string | null;
  chung_chi_quy_trai_phieu_kh2: string | null;
  chung_chi_quy_trai_phieu_kh3: string | null;
  ghi_chu_bao_ve_tai_chinh: string | null;
  ghi_chu_thong_tin_tai_san: string | null;
  ghi_chu_thong_tin_thu_nhap: string | null;
  tssl_chung_chi_quy_trai_phieu: string | null;
}

interface GiaTriHoanLaiHopDongBaoHiem {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  gia_tri_hien_tai: string | null;
  ma_hop_dong: string | null;
  quyen_so_huu: string | null;
  so_tien_hoan_lai: string | null;
  ten_san_pham: string | null;
  thoi_diem_hoan_lai: 'datetime' | null;
  tong_gia_tri: string | null;
  user_created: string | null;
  user_updated: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
}

interface HoSoPhanTich {
  id: string;
  customer_profile: string | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  sort: number | null;
  ten_ho_so_phan_tich: string | null;
  user_created: string | null;
}

interface IncomeTransaction {
  id: number;
  income: Record<string, any> | null;
  totalValue: string | null;
  transactionTime: 'datetime' | null;
}

interface KhachHang {
  id: string;
  status: string;
  sort: number | null;
  user_created: string | null;
  date_created: 'datetime' | null;
  user_updated: string | null;
  date_updated: 'datetime' | null;
  ten_khach_hang: string | null;
  loai_khach_hang: string | null;
  ngay_bat_dau_hop_dong: Date | null;
  CCCD: string | null;
  gioi_tinh: string | null;
  ngay_cap: Date | null;
  noi_cap: string | null;
  quoc_tich: Record<string, any> | null;
  tinh_trang_hon_nhan: string | null;
  email: string | null;
  sdt: string | null;
  dia_chi: string | null;
  lien_he_khac: string | null;
  lien_he_chinh: string | null;
  tinh_trang_viec_lam: string | null;
  linh_vuc: string | null;
  ten_cong_ty: string | null;
  dia_chi_lam_viec: string | null;
  chuc_vu: string | null;
  kinh_nghiem: string | null;
  dieu_chinh_luong: string | null;
  cong_viec_ghi_chu: string | null;
  mt_dau_tu_ghi_chu: string | null;
  mt_quan_ly_chi_tieu_ghi_chu: string | null;
  mt_bao_hiem_ghi_chu: string | null;
  mt_vay_ghi_chu: string | null;
  mt_huu_tri_ghi_chu: string | null;
  mt_nguoi_phu_thuoc_ghi_chu: string | null;
  mt_kinh_doanh_rieng_ghi_chu: string | null;
  mt_thue_tncn_ghi_chu: string | null;
  nhan_thua_ke: boolean | null;
  thua_ke_du_kien: string | null;
  thua_ke_hien_tai: string | null;
  thua_ke_co_di_chuc: boolean | null;
  tk_di_chuc_co_hieu_luc: boolean | null;
  tk_thong_tin_khac: string | null;
  dc_thong_tin_khac: string | null;
  dc_di_chuc_co_hieu_luc: boolean | null;
  co_di_chuc: boolean | null;
  thay_doi_dang_ke: string | null;
  planner: string | null;
  ten_khach_hang_2: string | null;
  gioi_tinh_2: string | null;
  CCCD_2: string | null;
  ngay_cap_2: Date | null;
  noi_cap_2: string | null;
  quoc_tich_2: Record<string, any> | null;
  so_luong_kh: boolean | null;
  email_2: string | null;
  sdt_2: string | null;
  dia_chi_2: string | null;
  lien_he_khac_2: string | null;
  tinh_trang_viec_lam_2: string | null;
  linh_vuc_2: string | null;
  chuc_vu_2: string | null;
  ten_cong_ty_2: string | null;
  dia_chi_lam_viec_2: string | null;
  kinh_nghiem_2: string | null;
  dieu_chinh_luong_2: string | null;
  cong_viec_ghi_chu_2: string | null;
  ngay_bat_review_hop_dong: Date | null;
  ho_khach_hang: string | null;
  biet_den_fidt: string | null;
  ngay_sinh: Date | null;
  ngay_sinh_2: Date | null;
  thu_nhap_ghi_chu: string | null;
  no_ghi_chu: string | null;
  su_dung_the_tin_dung: string | null;
  thanh_toan_du_no: string | null;
  co_no_qua_han: string | null;
  bao_hiem_ghi_chu: string | null;
  nhan_thua_ke_2: boolean | null;
  thua_ke_du_kien_2: string | null;
  thua_ke_hien_tai_2: string | null;
  thua_ke_co_di_chuc_2: boolean | null;
  tk_di_chuc_co_hieu_luc_2: boolean | null;
  tk_thong_tin_khac_2: string | null;
  co_di_chuc_2: boolean | null;
  dc_di_chuc_co_hieu_luc_2: boolean | null;
  dc_thong_tin_khac_2: string | null;
  ma_code: string | null;
  suc_khoe_hien_tai: string | null;
  co_hut_thuoc: string | null;
  van_de_suc_khoe: string | null;
  chan_thuong: string | null;
  the_thao_nguy_hiem: string | null;
  suc_khoe_gia_dinh: string | null;
  suc_khoe_hien_tai_2: string | null;
  co_hut_thuoc_2: string | null;
  van_de_suc_khoe_2: string | null;
  chan_thuong_2: string | null;
  suc_khoe_gia_dinh_2: string | null;
  the_thao_nguy_hiem_2: string | null;
  mt_dau_tu: Record<string, any> | null;
  mt_quan_ly_chi_tieu: Record<string, any> | null;
  mt_bao_hiem: Record<string, any> | null;
  mt_vay: Record<string, any> | null;
  mt_huu_tri: Record<string, any> | null;
  mt_nguoi_phu_thuoc: Record<string, any> | null;
  mt_kinh_doanh_rieng: Record<string, any> | null;
  mt_thue_tncn: Record<string, any> | null;
  paraplanner: number | null;
  hieu_biet_ve_dau_tu: Record<string, any> | null;
  giai_doan_hien_tai: Record<string, any> | null;
  loi_nhuan_tu_dau_tu: Record<string, any> | null;
  bao_lau_se_rut_tien: Record<string, any> | null;
  danh_muc_dau_tu_giam: Record<string, any> | null;
  muc_dich_dau_tu: Record<string, any> | null;
  on_dinh_trong_thu_nhap: Record<string, any> | null;
  trang_thai: string | null;
  tong_tai_san: number | null;
  tong_thu_nhap: number | null;
  tong_chi_tieu: number | null;
  tong_diem: number | null;
  giai_doan_hien_tai_2: Record<string, any> | null;
  loi_nhuan_tu_dau_tu_2: Record<string, any> | null;
  bao_lau_se_rut_tien_2: Record<string, any> | null;
  hieu_biet_ve_dau_tu_2: Record<string, any> | null;
  danh_muc_dau_tu_giam_2: Record<string, any> | null;
  muc_dich_dau_tu_2: Record<string, any> | null;
  on_dinh_trong_thu_nhap_2: Record<string, any> | null;
  tong_diem_2: number | null;
  ho_khach_hang_2: string | null;
  aum: number | null;
  tong_no: number | null;
  ngay_bat_dau_hop_dong_dau_tien: Date | null;
  ngay_ket_thuc_hop_dong: Date | null;
  chap_nhan_rui_ro: string | null;
  chap_nhan_rui_ro_2: string | null;
  rui_ro_ghi_chu: string | null;
  birthday_email_enabled: boolean | null;
  ngay_bat_dau_dau_tu: Date | null;
  ngay_ket_thuc_dau_tu: Date | null;
  so_lan_tai_ky: number | null;
  khong_nhan_email: boolean | null;
  co_nhan_email: boolean | null;
  from_other_source: boolean | null;
  nguoi_gioi_thieu: string | null;
  other_source: string | null;
  files_khach_hang: number[] | KhachHangFiles[];
}

interface KhachHangFiles {
  id: number;
  khach_hang_id: string | null | KhachHang;
  directus_files_id: string | null | DirectusFile;
}

interface KhauViRuiRo {
  id: number;
  answered_questions: string | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  deadId: string | null;
  name: string | null;
  risk_taste: string | null;
  risk_tolerance: string | null;
  tasted_score: number | null;
  tolerance_score: number | null;
  profile: string | null;
}

interface KichBanDongTien {
  id: string;
  autosync: boolean | null;
  customer_profile: string | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  den_khi_nghi_huu: boolean | null;
  description: string | null;
  end_year: number | null;
  name: string | null;
  start_year: number | null;
  user_updated: string | null;
  assumptions: number[] | KichBanDongTienAssumption[];
  transactions: number[] | KichBanDongTienTransactions[];
}

interface KichBanDongTienAssumption {
  id: number;
  assumption_id: string | null | Assumption;
  kich_ban_dong_tien_id: string | null | KichBanDongTien;
  sort: number | null;
}

interface KichBanDongTienTransactions {
  id: number;
  collection: string | null | "asset_transaction" | "debt_transaction" | "expense_transaction" | "income_transaction";
  item: string | null | AssetTransaction | DebtTransaction | ExpenseTransaction | IncomeTransaction;
  kich_ban_dong_tien_id: string | null | KichBanDongTien;
}

interface KichBanPhanTichNcbh {
  id: number;
  chi_phi_mai_tang: string | null;
  du_toan_chi_phi_dt_va_ph: string | null;
  thu_nhap_bi_anh_huong: string | null;
}

interface KichBanPhanTichNcbhBaoHiemNtSanCo {
  id: number;
}

interface KichBanPhanTichNcbhNguonTaiChinhKhac {
  id: number;
}

interface KichBanPhanTichNcbhNvTraNoCuaHgd {
  id: number;
}

interface KichBanPhanTichNcbhTongTichLuy {
  id: number;
}

interface MailTemplates {
  id: number;
  contract_end: string | null;
  contract_review: string | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  happy_birthday: string | null;
  sendgrid_api_key: string | null;
  user_created: string | null;
  user_updated: string | null;
  reset_password: string | null;
}

interface NgoaiTe {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  ghi_chu: string | null;
  gia_mua: string | null;
  gia_tri_hien_tai: string | null;
  gia_tri_luc_mua: string | null;
  loai_ngoai_te: string | null;
  quyen_so_huu: string | null;
  so_luong: number | null;
  thoi_diem_mua: 'datetime' | null;
  tong_gia_tri: string | null;
  user_created: string | null;
  user_updated: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
}

interface NguoiPhuThuoc {
  id: string;
  user_created: string | null;
  date_created: 'datetime' | null;
  user_updated: string | null;
  date_updated: 'datetime' | null;
  ten_nguoi_phu_thuoc: string | null;
  quan_he: string | null;
  khach_hang: string | null;
  thoi_gian_phu_thuoc: string | null;
  ghi_chu: string | null;
  phu_thuoc: string | null;
  ngay_sinh: Date | null;
}

interface NguonTaiChinhKhac {
  id: string;
  gia_tri: string | null;
  ten_nguon_tai_chinh_khac: string | null;
}

interface No {
  id: string;
  user_created: string | null;
  date_created: 'datetime' | null;
  user_updated: string | null;
  date_updated: 'datetime' | null;
  nguoi_no: string | null;
  chu_no: string | null;
  lai_suat: string | null;
  tien_tra_no_dinh_ky: number | null;
  du_no_hien_tai: number | null;
  ghi_chu: string | null;
  khach_hang: string | null;
  chi_tieu: string | null;
  loai_no: string | null;
  tan_suat_tra_no: string | null;
  tai_san_: Record<string, any> | null;
}

interface NvTraNoCuaHgd {
  id: string;
  gia_tri_no: string | null;
  ten_no: string | null;
}

interface NvTraNoCuaHgdCacKhoanNo {
  id: number;
  cac_khoan_no_id: string | null;
}

interface Params {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  description: string | null;
  name: string | null;
  sort: number | null;
  user_created: string | null;
  user_updated: string | null;
}

interface PbiConfig {
  id: number;
  url: string | null;
}

interface PbiDashboard {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  link: string | null;
  name: string | null;
  user_created: string | null;
  user_updated: string | null;
  report_id: string | null;
  directus_roles: number[] | PbiDashboardDirectusRoles[];
}

interface PbiDashboardDirectusRoles {
  id: number;
  directus_roles_id: string | null | DirectusRole;
  pbi_dashboard_id: string | null | PbiDashboard;
}

interface PbiFilterRules {
  id: string;
  column: string | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  operator: string | null;
  pbi: string | null;
  schema: string | null;
  sort: number | null;
  status: string;
  table: string | null;
  user_created: string | null;
  user_updated: string | null;
  values: Record<string, any> | null;
}

interface Permission {
  id: number;
  action: string | null;
  active: boolean | null;
  description: string | null;
  name: string | null;
  resource: string | null;
}

interface PersonalInfo {
  id: string;
  available_in_office_hours: boolean | null;
  city: string | null;
  current_address: string | null;
  date_created: 'datetime' | null;
  date_of_birth: Date | null;
  date_updated: 'datetime' | null;
  detailed_address: string | null;
  district: string | null;
  email: string | null;
  first_name: string | null;
  gender: string | null;
  id_number: string | null;
  issue_date: Date | null;
  issue_place: string | null;
  item_status: string | null;
  last_name: string | null;
  nationality: string | null;
  no_mail_needed: boolean | null;
  notes: string | null;
  phone_number: string | null;
  social_media_contact: string | null;
  social_security_number: string | null;
  sort: number | null;
  tax_number: string | null;
  user_created: string | null;
  user_updated: string | null;
  ward: string | null;
  contactable_in_office_hours: boolean | null;
  email_not_interested: boolean | null;
  employment_status: Record<string, any> | null;
  health_status: Record<string, any> | null;
  inheritance: Record<string, any> | null;
  marital_status: string | null;
  marriage_year: string | null;
  middle_name: string | null;
  phone_required: boolean | null;
  primary_contact: string | null;
  social_contact: string | null;
  birth_display_mode: string | null;
  financial_goals: Record<string, any> | null;
  relations: Record<string, any> | null;
  will: Record<string, any> | null;
}

interface PhanTichNhuCau {
  id: string;
  ten: string | null;
  kh_1: number[] | PhanTichNhuCauSuKienBaoHiemTrongYeu[];
  kh_2: number[] | PhanTichNhuCauSuKienBaoHiemTrongYeu1[];
}

interface PhanTichNhuCauKichBanPtncbh {
  id: number;
  phan_tich_nhu_cau_id: string | null;
}

interface PhanTichNhuCauKichBanPtncbh1 {
  id: number;
  phan_tich_nhu_cau_id: string | null;
}

interface PhanTichNhuCauSuKienBaoHiemTrongYeu {
  id: number;
  phan_tich_nhu_cau_id: string | null | PhanTichNhuCau;
  su_kien_bao_hiem_trong_yeu_id: string | null | SuKienBaoHiemTrongYeu;
}

interface PhanTichNhuCauSuKienBaoHiemTrongYeu1 {
  id: number;
  phan_tich_nhu_cau_id: string | null | PhanTichNhuCau;
  su_kien_bao_hiem_trong_yeu_id: string | null | SuKienBaoHiemTrongYeu;
}

interface Profile {
  id: string;
  account_closure_date: Date | null;
  credit_habits: Record<string, any> | null;
  customer: string | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  dependent_information: string | null;
  employment_status: Record<string, any> | null;
  financial_goals: Record<string, any> | null;
  health_status: Record<string, any> | null;
  info_extraction_date: Date | null;
  inheritance: Record<string, any> | null;
  item_status: string | null;
  locked: boolean | null;
  marital_status: string | null;
  name: string | null;
  note: string | null;
  second_customer_personal_info: string | null;
  will: Record<string, any> | null;
  creator: string | null;
  relations: Record<string, any> | null;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  middle_name: string | null;
  phone_number: string | null;
  contactable_in_office_hours: boolean | null;
  current_address: string | null;
  email_not_interested: boolean | null;
  issue_date: Date | null;
  issue_place: string | null;
  notes: string | null;
  number_display_mode: string | null;
  primary_contact: string | null;
  social_contact: string | null;
  assets: number[] | ProfileAssets[];
  cash_flow_analysis_scenarios: number[] | ProfileKichBanDongTien[];
  debt: number[] | ProfileCacKhoanNo[];
  expenses: number[] | ProfileWChiTieu[];
  income: number[] | ProfileWThuNhap[];
  insurance: number[] | ProfileInsurance[];
  insurance_needs_analysis_scenarios: number[] | ProfilePhanTichNhuCau[];
  linked_contracts: number[] | ContractProfile[];
  related_documents: number[] | ProfileDocument[];
}

interface ProfileAssets {
  id: number;
  collection: string | null | "bat_dong_san" | "chung_chi_quy" | "co_phieu" | "gia_tri_hoan_lai_hop_dong_bao_hiem" | "ngoai_te" | "tai_san_khac" | "tien_cho_vay" | "tien_gui" | "tien_mat" | "trai_phieu" | "vang" | "von_gop";
  item: string | null | BatDongSan | ChungChiQuy | CoPhieu | GiaTriHoanLaiHopDongBaoHiem | NgoaiTe | TaiSanKhac | TienChoVay | TienGui | TienMat | TraiPhieu | Vang | VonGop;
  profile_id: string | null | Profile;
}

interface ProfileCacKhoanNo {
  id: number;
  cac_khoan_no_id: string | null | CacKhoanNo;
  profile_id: string | null | Profile;
}

interface ProfileDocument {
  id: number;
  document_id: string | null | Document;
  profile_id: string | null | Profile;
}

interface ProfileInsurance {
  id: number;
  collection: string | null | "bao_hiem_nhan_tho" | "bao_hiem_suc_khoe_v2";
  item: string | null | BaoHiemNhanTho | BaoHiemSucKhoeV2;
  profile_id: string | null | Profile;
}

interface ProfileKichBanDongTien {
  id: number;
  kich_ban_dong_tien_id: string | null | KichBanDongTien;
  profile_id: string | null | Profile;
}

interface ProfilePhanTichNhuCau {
  id: number;
  phan_tich_nhu_cau_id: string | null | PhanTichNhuCau;
  profile_id: string | null | Profile;
}

interface ProfileWChiTieu {
  id: number;
  profile_id: string | null | Profile;
  w_chi_tieu_id: string | null | WChiTieu;
}

interface ProfileWThuNhap {
  id: number;
  profile_id: string | null | Profile;
  w_thu_nhap_id: string | null | WThuNhap;
}

interface QuyenLoiBhnt {
  id: string;
  bao_hiem_nhan_tho: string | null;
  quyen_loi_san_pham_chinh: string | null;
  so_tien_bao_hiem: string | null;
  thoi_han_dong_phi: Record<string, any> | null;
  thoi_han_hop_dong: Record<string, any> | null;
}

interface QuyenLoiBhsk {
  id: string;
  bao_hiem_id: string | null;
  bien_chung_thai_san: string | null;
  chi_phi_kham_benh: string | null;
  chi_phi_kham_nha_khoa: string | null;
  chi_phi_sanh_mo: string | null;
  chi_phi_sanh_thuong: string | null;
  chi_phi_vat_ly_tri_lieu: string | null;
  ghi_chu: string | null;
  hieu_luc: boolean | null;
  loai_quyen_loi: string | null;
  nguoi_duoc_bao_hiem: string | null;
  phi_bao_hiem_nam: string | null;
  quyen_loi_khac: string | null;
  tan_suat_dong_phi: string | null;
}

interface QuyenLoiBoTroBhsk {
  id: string;
  bao_hiem_id: string | null;
  bao_lanh_vien_phi: boolean | null;
  chi_phi_cay_ghep_noi_tang: string | null;
  chi_phi_cham_soc_y_te_tai_nha: string | null;
  chi_phi_dieu_tri_noi_tru: string | null;
  chi_phi_dieu_tri_sau_nhap_vien: string | null;
  chi_phi_dieu_tri_tai_nan: string | null;
  chi_phi_dieu_tri_truoc_nhap_vien: string | null;
  chi_phi_mai_tang: string | null;
  chi_phi_nam_vien: string | null;
  chi_phi_phau_thuat: string | null;
  chi_phi_phuc_hoi_chuc_nang: string | null;
  chi_phi_van_chuyen: string | null;
  co_loai_tru_phi_cay_ghep: boolean | null;
  co_loai_tru_phi_mua_noi_tang: boolean | null;
  ghi_chu: string | null;
  nguoi_duoc_bao_hiem: string | null;
  phi_bao_hiem_nam: string | null;
  quyen_loi_khac: string | null;
  tan_suat_dong_phi: string | null;
  ti_le_dong_chi_tra: string | null;
  tro_cap_benh_vien_cong: string | null;
  tro_cap_nam_vien: string | null;
  tu_vong_thuong_tat_do_tai_nan: string | null;
  tu_vong_thuong_tat_khong_do_tai_nan: string | null;
}

interface Resource {
  id: string;
  active: boolean | null;
  description: string | null;
  name: string | null;
}

interface Role {
  id: string;
  description: string | null;
  name: string | null;
  value: string | null;
  permissions: number[] | RolePermission[];
}

interface RoleMapping {
  id: string;
  role: string | null;
  users: number[] | RoleMappingDirectusUsers[];
}

interface RoleMappingDirectusUsers {
  id: number;
  directus_users_id: string | null | DirectusUser;
  role_mapping_id: string | null | RoleMapping;
}

interface RolePermission {
  id: number;
  permission_id: number | null | Permission;
  role_id: string | null | Role;
}

interface RuiRo {
  id: string;
  user_created: string | null;
  date_created: 'datetime' | null;
  user_updated: string | null;
  date_updated: 'datetime' | null;
  cau_hoi: string | null;
  mo_ta: string | null;
  diem: number | null;
}

interface SanPhamBoTroBhnt {
  id: number;
  bao_hiem_nhan_tho: string | null;
  bat_dau: 'datetime' | null;
  ghi_chu: string | null;
  hieu_luc: boolean | null;
  ket_thuc: 'datetime' | null;
  nguoi_duoc_bao_hiem: string | null;
  phi_bao_hiem_nam: string | null;
  quyen_loi_bo_tro: string | null;
  so_tien_bao_hiem: string | null;
  tan_suat_dong_phi: string | null;
  thoi_han_dong_phi: Record<string, any> | null;
}

interface SanPhamBoTroBhsk {
  id: number;
  bienChungThaiSan: string | null;
  chiPhiKhamBenh: string | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  ghiChu: string | null;
  idBaoHiem: string | null;
  khac: string | null;
  nguoiDuocBH: string | null;
  phiHangNam: string | null;
  sinhMo: string | null;
  sinhThuong: string | null;
  stbhTrenNam: string | null;
  tanSuatDongPhi: string | null;
  type: string | null;
  user_created: string | null;
  user_updated: string | null;
  vatLyTriLieu: string | null;
}

interface Setting {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  docx_render_server_url: string | null;
  user_created: string | null;
  user_updated: string | null;
}

interface SuKienBaoHiemTrongYeu {
  id: string;
  bao_hiem_sinh_menh: Record<string, any> | null;
  benh_ly_nghiem_trong: Record<string, any> | null;
  key: string | null;
  meta: Record<string, any> | null;
  ten: string | null;
  thuong_tat_toan_bo_vinh_vien: Record<string, any> | null;
}

interface SuKienBaoHiemTrongYeuBaoHiemSinhMenh {
  id: number;
  collection: string | null;
  item: string | null;
  su_kien_bao_hiem_trong_yeu_id: string | null;
}

interface TaiSan {
  id: string;
  user_created: string | null;
  date_created: 'datetime' | null;
  user_updated: string | null;
  date_updated: 'datetime' | null;
  loai_tai_san: string | null;
  quyen_so_huu: string | null;
  gia_tri: number | null;
  ghi_chu: string | null;
  no: string | null;
  khach_hang: string | null;
  dia_chi: string | null;
  dien_tich: string | null;
  da_co_so: boolean | null;
  da_hoan_cong: boolean | null;
  gia_tri_noi_that: number | null;
  thoi_diem_mua: string | null;
  loai_hinh_bds: string | null;
  gia_tri_thoi_diem_mua: number | null;
}

interface TaiSanKhac {
  id: string;
  co_the_the_chap: boolean | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  ghi_chu: string | null;
  gia_tri_hien_tai: string | null;
  gia_tri_luc_mua: string | null;
  quyen_so_huu: string | null;
  ten_tai_san: string | null;
  thoi_diem_mua: 'datetime' | null;
  tong_gia_tri: string | null;
  user_created: string | null;
  user_updated: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
  so_luong: number | null;
}

interface ThayTheThuNhapNtc {
  id: string;
  chi_tieu: string | null;
  nhu_cau_tai_chinh: string | null;
  ten_gia_tri: string | null;
  thoi_gian: string | null;
  ti_le_lam_phat: string | null;
}

interface ThuNhap {
  id: string;
  user_created: string | null;
  date_created: 'datetime' | null;
  user_updated: string | null;
  date_updated: 'datetime' | null;
  loai_thu_nhap: string | null;
  so_tien: number | null;
  ghi_chu: string | null;
  khach_hang: string | null;
  thu_nhap: string | null;
  quyen_so_huu: string | null;
}

interface TienChoVay {
  id: number;
  du_no_cho_vay_hien_tai: string | null;
  hinh_thuc_khoan_cho_vay: string | null;
  lai_suat: string | null;
  nguoi_vay: string | null;
  quyen_so_huu: string | null;
  so_tien_cho_vay: string | null;
  so_tien_nhan_dinh_ky: string | null;
  tan_suat_nhan: string | null;
  ten_khoan_cho_vay: string | null;
  thoi_diem_cho_vay: Date | null;
  thoi_diem_dao_han: Date | null;
  thoi_han_cho_vay: number | null;
  thoi_han_cho_vay_theo: string | null;
  w_updated_user: string | null;
  ghi_chu: string | null;
}

interface TienGui {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  ghi_chu: string | null;
  gia_tri_hien_tai: string | null;
  hinh_thuc_dao_han: string | null;
  hinh_thuc_gui_tien: string | null;
  ky_han: string | null;
  lai_suat: number | null;
  loai_tien_te: string | null;
  quyen_so_huu: string | null;
  so_tien_gui: string | null;
  ten_chi_nhanh: string | null;
  ten_ngan_hang_gui: string | null;
  thoi_diem_dao_han: 'datetime' | null;
  thoi_diem_gui_tien: 'datetime' | null;
  tong_gia_tri: string | null;
  user_created: string | null;
  user_updated: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
  hinh_thuc_nhan_lai: string | null;
  tan_suat_nhan_lai: string | null;
  ten_khoan_tien_gui: string | null;
  so_du: string | null;
}

interface TienMat {
  id: string;
  ghi_chu: string | null;
  quyen_so_huu: string | null;
  so_tien: string | null;
  thoi_diem_bat_dau: 'datetime' | null;
  thoi_diem_ket_thuc_dropdown_value: string | null;
  thoi_diem_ket_thuc_value: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
}

interface ToTuVan {
  id: number;
  status: string;
  sort: number | null;
  user_created: string | null;
  date_created: 'datetime' | null;
  user_updated: string | null;
  date_updated: 'datetime' | null;
  ten: string | null;
  leader: string | null;
  planner: number[] | ToTuVanDirectusUsers[];
}

interface ToTuVanDirectusUsers {
  id: number;
  to_tu_van_id: number | null | ToTuVan;
  directus_users_id: string | null | DirectusUser;
}

interface TongTichLuy {
  id: string;
  gia_tri_tich_luy: string | null;
  tai_san: string | null;
  ten_tich_luy: string | null;
  thu_nhap: string | null;
}

interface TongTichLuyTaiSan {
  id: number;
  tai_san_id: string | null;
}

interface TraiPhieu {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  dong_tien_thuc_nhan_khi_dau_tu: string | null;
  ghi_chu: string | null;
  gia_mua: string | null;
  gia_mua_cho_tang: string | null;
  gia_tri_hien_tai: string | null;
  gia_tri_luc_mua: string | null;
  ki_han: number | null;
  ki_han_theo: string | null;
  ki_tra_lai_coupon: string | null;
  loai_trai_phieu: string | null;
  loi_suat_coupon: number | null;
  loi_suat_thuc_nhan: number | null;
  ma_giay_to_goc: string | null;
  ma_trai_phieu: string | null;
  ngay_cho_tang: 'datetime' | null;
  nguoi_nhan: string | null;
  quyen_so_huu: string | null;
  so_luong: number | null;
  so_luong_trai_phieu_cho_tang: number | null;
  ten_to_chuc_bao_lanh: string | null;
  ten_to_chuc_phat_hanh: string | null;
  thoi_diem_dao_han: 'datetime' | null;
  thoi_diem_mua: 'datetime' | null;
  thoi_diem_phat_hanh: 'datetime' | null;
  thoi_gian_tra_lai: 'datetime' | null;
  tien_te: string | null;
  tong_gia_tri: string | null;
  user_created: string | null;
  user_updated: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
  lai_suat_co_dinh: number | null;
  menh_gia: string | null;
  thoi_diem_ket_thuc_lai_co_dinh: 'datetime' | null;
}

interface Transaction {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  sort: number | null;
  user_created: string | null;
  user_updated: string | null;
}

interface Vang {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  ghi_chu: string | null;
  gia_tri_hien_tai: string | null;
  gia_tri_khi_mua: string | null;
  gia_tri_luc_mua: string | null;
  quyen_so_huu: string | null;
  so_luong: number | null;
  ten_doanh_nghiep_ban_vang: string | null;
  thoi_diem_mua: 'datetime' | null;
  tong_gia_tri: string | null;
  trong_luong: number | null;
  tuoi_ham_luong_vang: number | null;
  user_created: string | null;
  user_updated: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
  xuat_xu: string | null;
  loai_vang: string | null;
  so_luong_theo: string | null;
}

interface VonGop {
  id: string;
  chu_doanh_nghiep: boolean | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  dia_chi: string | null;
  gia_tri_cong_ty: string | null;
  gia_tri_hien_tai: string | null;
  loai_hinh_doanh_nghiep: string | null;
  loi_nhuan_sau_thue: string | null;
  mo_ta_ngan_ve_hoat_dong_kinh_doanh: string | null;
  mst: string | null;
  nganh_nghe_kinh_doanh: string | null;
  phan_tram_tang_truong_doanh_thu: number | null;
  quyen_so_huu: string | null;
  so_luong_nhan_vien: number | null;
  ten_doanh_nghiep: string | null;
  thoi_diem_thanh_lap: 'datetime' | null;
  thu_nhap_tu_doanh_nghiep: string | null;
  tong_doanh_thu: string | null;
  tong_gia_tri: string | null;
  ty_le_so_huu: number | null;
  user_created: string | null;
  user_updated: string | null;
  von_dieu_le: string | null;
  von_gop_doanh_nghiep: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
  thoi_diem_gop_von: 'datetime' | null;
}

interface VonGopDoanhNghiep {
  id: string;
  chu_doanh_nghiep: boolean | null;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  dia_chi: string | null;
  gia_tri_cong_ty: string | null;
  loai_hinh_doanh_nghiep: string | null;
  loi_nhuan_sau_thue: string | null;
  mo_ta_ngan_ve_hoat_dong_kinh_doanh: string | null;
  mst: string | null;
  nganh_nghe_kinh_doanh: string | null;
  phan_tram_tang_truong_doanh_thu: number | null;
  quyen_so_huu: string | null;
  so_luong_nhan_vien: number | null;
  ten_doanh_nghiep: string | null;
  thoi_diem_thanh_lap: 'datetime' | null;
  thu_nhap_tu_doanh_nghiep: string | null;
  tong_doanh_thu: string | null;
  tong_gia_tri: string | null;
  ty_le_so_huu: number | null;
  user_created: string | null;
  user_updated: string | null;
  von_dieu_le: string | null;
}

interface WChiTieu {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  gan_voi_khoan_vay: string | null;
  gan_voi_loai_tai_san: string | null;
  ghi_chu: string | null;
  loai_chi_phi: string | null;
  loai_chi_tieu: string | null;
  loai_thoi_han: string | null;
  nguon_chi_tieu: string | null;
  so_tien: string | null;
  tan_suat: string | null;
  thoi_diem_bat_dau: 'datetime' | null;
  thoi_diem_ket_thuc_dropdown_value: string | null;
  thoi_diem_ket_thuc_value: string | null;
  thoi_han: number | null;
  tong_chi_tieu_1_nam: string | null;
  user_created: string | null;
  user_updated: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
  dang_chi_phi: string | null;
  phan_tram: number | null;
  so_tien_theo_phan_tram: string | null;
  ten_khoan_chi_tieu: string | null;
  gan_voi_tai_san: number[] | WChiTieuGanVoiTaiSan[];
}

interface WChiTieuGanVoiTaiSan {
  id: number;
  collection: string | null | "bat_dong_san" | "chung_chi_quy" | "co_phieu" | "gia_tri_hoan_lai_hop_dong_bao_hiem" | "ngoai_te" | "tai_san_khac" | "tien_gui" | "trai_phieu" | "vang" | "von_gop";
  item: string | null | BatDongSan | ChungChiQuy | CoPhieu | GiaTriHoanLaiHopDongBaoHiem | NgoaiTe | TaiSanKhac | TienGui | TraiPhieu | Vang | VonGop;
  w_chi_tieu_id: string | null | WChiTieu;
}

interface WKhachHang {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  legacy_info: string | null;
  status: string | null;
  user_created: string | null;
  user_updated: string | null;
}

interface WKhachHangCacKhoanNo {
  id: number;
  cac_khoan_no_id: string | null | CacKhoanNo;
  w_khach_hang_id: string | null | WKhachHang;
}

interface WKhachHangTaiSan {
  id: number;
  collection: string | null | "bat_dong_san" | "chung_chi_quy" | "co_phieu" | "gia_tri_hoan_lai_hop_dong_bao_hiem" | "ngoai_te" | "tai_san_khac" | "tien_gui" | "trai_phieu" | "vang";
  item: string | null | BatDongSan | ChungChiQuy | CoPhieu | GiaTriHoanLaiHopDongBaoHiem | NgoaiTe | TaiSanKhac | TienGui | TraiPhieu | Vang;
  w_khach_hang_id: string | null | WKhachHang;
}

interface WThuNhap {
  id: string;
  date_created: 'datetime' | null;
  date_updated: 'datetime' | null;
  gan_voi_loai_tai_san: string | null;
  ghi_chu: string | null;
  loai_muc_tang: string | null;
  loai_thoi_han: string | null;
  loai_thu_nhap: string | null;
  muc_tang: number | null;
  nguon_thu_nhap: string | null;
  so_tien: string | null;
  tan_suat: string | null;
  thoi_diem_bat_dau: 'datetime' | null;
  thoi_diem_ket_thuc_dropdown_value: string | null;
  thoi_diem_ket_thuc_value: string | null;
  thoi_han: number | null;
  thu_nhap: string | null | TongTichLuy[];
  thu_nhap_du_kien_se_thay_doi_dang_ke: boolean | null;
  thu_nhap_sau_thue: boolean | null;
  tong_thu_nhap_1_nam: string | null;
  user_created: string | null;
  user_updated: string | null;
  w_updated_time: 'datetime' | null;
  w_updated_user: string | null;
  ten_khoan_thu_nhap: string | null;
  gan_voi_tai_san: number[] | WThuNhapGanVoiTaiSan[];
}

interface WThuNhapGanVoiTaiSan {
  id: number;
  collection: string | null | "bat_dong_san" | "chung_chi_quy" | "co_phieu" | "gia_tri_hoan_lai_hop_dong_bao_hiem" | "ngoai_te" | "tai_san_khac" | "tien_gui" | "trai_phieu" | "vang" | "von_gop";
  item: string | null | BatDongSan | ChungChiQuy | CoPhieu | GiaTriHoanLaiHopDongBaoHiem | NgoaiTe | TaiSanKhac | TienGui | TraiPhieu | Vang | VonGop;
  w_thu_nhap_id: string | null | WThuNhap;
}
