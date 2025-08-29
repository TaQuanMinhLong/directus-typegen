// Auto-generated. Do not edit manually.

import type { DirectusUser } from "@directus/sdk"
interface MySchema {
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

type CustomUser = any;

interface ContractProfile {
  id: number;
  profile_id: string | Profile;
  contract_id: string | Contract;
}

interface ProfileDocument {
  id: number;
  profile_id: string | Profile;
  document_id: string | Document;
}

interface CacKhoanNoTaiSanTheChap {
  id: number;
  cac_khoan_no_id: string | CacKhoanNo;
  collection: 'bat_dong_san' | 'chung_chi_quy' | 'co_phieu' | 'gia_tri_hoan_lai_hop_dong_bao_hiem' | 'ngoai_te' | 'tai_san_khac' | 'tien_gui' | 'trai_phieu' | 'vang' | 'von_gop';
  item: string | BatDongSan | ChungChiQuy | CoPhieu | GiaTriHoanLaiHopDongBaoHiem | NgoaiTe | TaiSanKhac | TienGui | TraiPhieu | Vang | VonGop;
}

interface DealTaiSan {
  id: number;
  deal_id: string | Deal;
  collection: 'bat_dong_san' | 'chung_chi_quy' | 'co_phieu' | 'gia_tri_hoan_lai_hop_dong_bao_hiem' | 'ngoai_te' | 'tai_san_khac' | 'tien_gui' | 'tien_mat' | 'trai_phieu' | 'vang' | 'von_gop';
  item: string | BatDongSan | ChungChiQuy | CoPhieu | GiaTriHoanLaiHopDongBaoHiem | NgoaiTe | TaiSanKhac | TienGui | TienMat | TraiPhieu | Vang | VonGop;
}

interface FreeServiceDocuments {
  id: number;
  document_id: string | FreeDocuments;
  service_type: 'free_tham_dinh_danh_muc_tai_san';
  service: string | FreeThamDinhDanhMucTaiSan;
}

interface KichBanDongTienTransactions {
  id: number;
  kich_ban_dong_tien_id: string | KichBanDongTien;
  collection: 'asset_transaction' | 'debt_transaction' | 'expense_transaction' | 'income_transaction';
  item: string | AssetTransaction | DebtTransaction | ExpenseTransaction | IncomeTransaction;
}

interface ProfileAssets {
  id: number;
  profile_id: string | Profile;
  collection: 'bat_dong_san' | 'chung_chi_quy' | 'co_phieu' | 'gia_tri_hoan_lai_hop_dong_bao_hiem' | 'ngoai_te' | 'tai_san_khac' | 'tien_cho_vay' | 'tien_gui' | 'tien_mat' | 'trai_phieu' | 'vang' | 'von_gop';
  item: string | BatDongSan | ChungChiQuy | CoPhieu | GiaTriHoanLaiHopDongBaoHiem | NgoaiTe | TaiSanKhac | TienChoVay | TienGui | TienMat | TraiPhieu | Vang | VonGop;
}

interface ProfileInsurance {
  id: number;
  profile_id: string | Profile;
  collection: 'bao_hiem_nhan_tho' | 'bao_hiem_suc_khoe_v2';
  item: string | BaoHiemNhanTho | BaoHiemSucKhoeV2;
}

interface WThuNhapGanVoiTaiSan {
  id: number;
  w_thu_nhap_id: string | WThuNhap;
  collection: 'bat_dong_san' | 'chung_chi_quy' | 'co_phieu' | 'gia_tri_hoan_lai_hop_dong_bao_hiem' | 'ngoai_te' | 'tai_san_khac' | 'tien_gui' | 'trai_phieu' | 'vang' | 'von_gop';
  item: string | BatDongSan | ChungChiQuy | CoPhieu | GiaTriHoanLaiHopDongBaoHiem | NgoaiTe | TaiSanKhac | TienGui | TraiPhieu | Vang | VonGop;
}

interface WChiTieuGanVoiTaiSan {
  id: number;
  w_chi_tieu_id: string | WChiTieu;
  collection: 'bat_dong_san' | 'chung_chi_quy' | 'co_phieu' | 'gia_tri_hoan_lai_hop_dong_bao_hiem' | 'ngoai_te' | 'tai_san_khac' | 'tien_gui' | 'trai_phieu' | 'vang' | 'von_gop';
  item: string | BatDongSan | ChungChiQuy | CoPhieu | GiaTriHoanLaiHopDongBaoHiem | NgoaiTe | TaiSanKhac | TienGui | TraiPhieu | Vang | VonGop;
}

interface DealBaoHiem {
  id: number;
  deal_id: string | Deal;
  collection: 'bao_hiem_nhan_tho';
  item: string | BaoHiemNhanTho;
}

interface FIDTSetting {
  id: string;
}

interface AssetTransaction {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface Assumption {
  id: string;
}

interface AssumptionParams {
  id: string;
}

interface BaoHiem {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  khach_hang: string | KhachHang;
}

interface BaoHiemNhanTho {
  id: string;
  w_updated_user: string | DirectusUsers;
  san_pham_bo_tro: string[] | SanPhamBoTroBhnt[];
  cac_quyen_loi_san_pham_chinh_khac: string[] | QuyenLoiBhnt[];
}

interface BaoHiemNtSanCo {
  id: string;
  bao_hiem_nt: string | BaoHiemNhanTho;
}

interface BaoHiemSucKhoe {
  id: string;
  w_updated_user: string | DirectusUsers;
  spbt_cua_bhnt: string | BaoHiemNhanTho;
}

interface BaoHiemSucKhoeV2 {
  id: string;
  spbt_cua_bhnt: string | BaoHiemNhanTho;
  cac_quyen_loi_chinh: string[] | QuyenLoiBhsk[];
  quyen_loi_bo_tro: string[] | QuyenLoiBoTroBhsk[];
}

interface BatDongSan {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  thong_tin_thua_dat: string | ChiTietBds;
  thong_tin_nha: string | ChiTietBds;
  thong_tin_cong_trinh_xay_dung_khac: string | ChiTietBds;
  thong_tin_can_ho: string | ChiTietBds;
}

interface CacKhoanNo {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  tai_san_the_chap: number[] | CacKhoanNoTaiSanTheChap[];
}

interface CacKhoanNoGanVoiTaiSan {
  id: string;
}

interface ChiTietBds {
  id: string;
}

interface ChiTieu {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  khach_hang: string | KhachHang;
}

interface ChungChiQuy {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface CloneData {
  id: string;
}

interface CoPhieu {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface Contract {
  id: string;
  responsible_team: string | ToTuVan;
  ref_source: string | DirectusUsers;
  customer: string | Customer;
  creator: string | DirectusUsers;
  consultant: string | DirectusUsers;
  linked_profiles: number[] | ContractProfile[];
}

interface ContractFiles {
  id: string;
}

interface Customer {
  id: string;
  personal_info: string | PersonalInfo;
  creator: string | DirectusUsers;
  contracts: string[] | Contract[];
  profiles: string[] | Profile[];
}

interface CustomerPrivateData {
  id: string;
}

interface CustomerPrivateDataAccessRequests {
  id: string;
  requester: string | DirectusUsers;
  profile: string | Profile;
  customer: string | Customer;
  approver: string | DirectusUsers;
}

interface CustomerPrivateDataAccessRequestsDirectusUsers {
  id: string;
}

interface CustomerProfile {
  id: string;
}

interface CustomerProfileCloneData {
  id: string;
}

interface DanhMucDauTu {
  id: string;
}

interface DanhMucPhanTich {
  id: string;
  ho_so_phan_tich: string | HoSoPhanTich;
  du_lieu: string[] | DuLieuPhanTich[];
}

interface Deal {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  to_tu_van: string | ToTuVan;
  nguoi_tu_van: string | DirectusUsers;
  khach_hang: string | WKhachHang;
  tai_san: number[] | DealTaiSan[];
  bao_hiem: number[] | DealBaoHiem[];
}

interface DealCacKhoanNo {
  id: string;
}

interface DealKichBanDongTien {
  id: string;
}

interface DealPhanTichNhuCau {
  id: string;
}

interface DealWChiTieu {
  id: string;
}

interface DealWThuNhap {
  id: string;
}

interface DebtTransaction {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface Document {
  id: string;
  updatedBy: string | DirectusUsers;
  profiles: number[] | ProfileDocument[];
}

interface DocumentFiles {
  id: string;
}

interface DocxMapping {
  id: string;
}

interface DropdownOptions {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface DuLieuPhanTich {
  id: string;
  danh_muc_phan_tich: string | DanhMucPhanTich;
}

interface ExpenseTransaction {
  id: string;
}

interface FmlCode {
  id: string;
}

interface FormMetadata {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface Formula {
  id: string;
}

interface FreeDocuments {
  id: string;
  service: number[] | FreeServiceDocuments[];
}

interface FreeDocumentsFiles {
  id: string;
}

interface FreeThamDinhDanhMucTaiSan {
  id: string;
  nguoi_tu_van: string | DirectusUsers;
}

interface GiaTriHoanLaiHopDongBaoHiem {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface HoSoPhanTich {
  id: string;
  danh_muc_phan_tich: string[] | DanhMucPhanTich[];
}

interface IncomeTransaction {
  id: string;
}

interface KhachHang {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  planner: string | DirectusUsers;
  paraplanner: string | ToTuVan;
  nguoi_gioi_thieu: string | DirectusUsers;
  bao_hiem: string[] | BaoHiem[];
  chi_tieu: string[] | ChiTieu[];
  nguoi_phu_thuoc: string[] | NguoiPhuThuoc[];
  no_phai_tra: string[] | No[];
  tai_san: string[] | TaiSan[];
  thu_nhap: string[] | ThuNhap[];
}

interface KhachHangFiles {
  id: string;
}

interface KhauViRuiRo {
  id: string;
  profile: string | Profile;
}

interface KichBanDongTien {
  id: string;
  user_updated: string | DirectusUsers;
  customer_profile: string | CustomerProfile;
  transactions: number[] | KichBanDongTienTransactions[];
}

interface KichBanDongTienAssumption {
  id: string;
}

interface KichBanPhanTichNcbh {
  id: string;
}

interface KichBanPhanTichNcbhBaoHiemNtSanCo {
  id: string;
}

interface KichBanPhanTichNcbhNguonTaiChinhKhac {
  id: string;
}

interface KichBanPhanTichNcbhNvTraNoCuaHgd {
  id: string;
}

interface KichBanPhanTichNcbhTongTichLuy {
  id: string;
}

interface MailTemplates {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface NgoaiTe {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface NguoiPhuThuoc {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  khach_hang: string | KhachHang;
}

interface NguonTaiChinhKhac {
  id: string;
}

interface No {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  khach_hang: string | KhachHang;
  chi_tieu: string | ChiTieu;
}

interface NvTraNoCuaHgd {
  id: string;
}

interface NvTraNoCuaHgdCacKhoanNo {
  id: string;
}

interface Params {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface PbiConfig {
  id: string;
}

interface PbiDashboard {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  pbi_filter_rules: string[] | PbiFilterRules[];
}

interface PbiDashboardDirectusRoles {
  id: string;
}

interface PbiFilterRules {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  pbi: string | PbiDashboard;
}

interface Permission {
  id: string;
  resource: string | Resource;
}

interface PersonalInfo {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface PhanTichNhuCau {
  id: string;
}

interface PhanTichNhuCauKichBanPtncbh {
  id: string;
}

interface PhanTichNhuCauKichBanPtncbh1 {
  id: string;
}

interface PhanTichNhuCauSuKienBaoHiemTrongYeu {
  id: string;
}

interface PhanTichNhuCauSuKienBaoHiemTrongYeu1 {
  id: string;
}

interface Profile {
  id: string;
  second_customer_personal_info: string | PersonalInfo;
  customer: string | Customer;
  creator: string | DirectusUsers;
  khau_vi_rui_ro: string[] | KhauViRuiRo[];
  linked_contracts: number[] | ContractProfile[];
  related_documents: number[] | ProfileDocument[];
  assets: number[] | ProfileAssets[];
  insurance: number[] | ProfileInsurance[];
}

interface ProfileCacKhoanNo {
  id: string;
}

interface ProfileKichBanDongTien {
  id: string;
}

interface ProfilePhanTichNhuCau {
  id: string;
}

interface ProfileWChiTieu {
  id: string;
}

interface ProfileWThuNhap {
  id: string;
}

interface QuyenLoiBhnt {
  id: string;
  bao_hiem_nhan_tho: string | BaoHiemNhanTho;
}

interface QuyenLoiBhsk {
  id: string;
  bao_hiem_id: string | BaoHiemSucKhoeV2;
}

interface QuyenLoiBoTroBhsk {
  id: string;
  bao_hiem_id: string | BaoHiemSucKhoeV2;
}

interface Resource {
  id: string;
}

interface Role {
  id: string;
}

interface RoleMapping {
  id: string;
  role: string | Role;
}

interface RoleMappingDirectusUsers {
  id: string;
}

interface RolePermission {
  id: string;
}

interface RuiRo {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface SanPhamBoTroBhnt {
  id: string;
  bao_hiem_nhan_tho: string | BaoHiemNhanTho;
}

interface SanPhamBoTroBhsk {
  id: string;
}

interface Setting {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface SuKienBaoHiemTrongYeu {
  id: string;
}

interface SuKienBaoHiemTrongYeuBaoHiemSinhMenh {
  id: string;
}

interface TaiSan {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  khach_hang: string | KhachHang;
}

interface TaiSanKhac {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface ThayTheThuNhapNtc {
  id: string;
}

interface ThuNhap {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  khach_hang: string | KhachHang;
}

interface TienChoVay {
  id: string;
  w_updated_user: string | DirectusUsers;
}

interface TienGui {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface TienMat {
  id: string;
  w_updated_user: string | DirectusUsers;
}

interface ToTuVan {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  leader: string | DirectusUsers;
}

interface ToTuVanDirectusUsers {
  id: string;
}

interface TongTichLuy {
  id: string;
  thu_nhap: string | WThuNhap;
  tai_san: string | TaiSan;
}

interface TongTichLuyTaiSan {
  id: string;
}

interface TraiPhieu {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface Transaction {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface Vang {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface VonGop {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface VonGopDoanhNghiep {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
}

interface WChiTieu {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  gan_voi_khoan_vay: string | No;
  gan_voi_tai_san: number[] | WChiTieuGanVoiTaiSan[];
}

interface WKhachHang {
  id: string;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  legacy_info: string | KhachHang;
  deals: string[] | Deal[];
}

interface WKhachHangCacKhoanNo {
  id: string;
}

interface WKhachHangTaiSan {
  id: string;
}

interface WThuNhap {
  id: string;
  w_updated_user: string | DirectusUsers;
  user_updated: string | DirectusUsers;
  user_created: string | DirectusUsers;
  gan_voi_tai_san: number[] | WThuNhapGanVoiTaiSan[];
}
