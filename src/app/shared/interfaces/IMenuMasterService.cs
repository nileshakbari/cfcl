public interface IMenuMasterService
{
    IEnumerable<MenuMaster> GetMenuMaster();
    IEnumerable<MenuMaster> GetMenuMaster(String UserRole);
}