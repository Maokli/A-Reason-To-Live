using Microsoft.EntityFrameworkCore.Migrations;

namespace api.data
{
    public partial class UpdatedReasonModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Reasons",
                newName: "Color");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Color",
                table: "Reasons",
                newName: "UserName");
        }
    }
}
