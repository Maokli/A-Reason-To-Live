using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Data;
using Api.Dtos;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
  public class ReasonsController : BaseApiController
  {
    private readonly DataContext _context;
    public ReasonsController(DataContext context)
    {
      _context = context; //Creates an instance of the DbContext
    }

    //GET : api/reasons
    //Returns a list of ReasonDto Objects
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Reason>>> GetReasons(){
        var reasonsFromDb = _context.Reasons;
        var orderedReasons = reasonsFromDb.OrderBy(r => r.DateCreated); //Order by date Created

        var reasons = await orderedReasons.ToListAsync(); //Execute the query

        var reasonsToReturn = new List<ReasonDto>(); //Initialize Reasons to return list

        //Map Reasons to Dtos
        foreach (var reason in reasons)
        {
            reasonsToReturn.Add(MapReasonToDto(reason)); //adds mapped reasons to new list
        }
        return  Ok(reasonsToReturn); //Returns the new List
    }

    //POST : api/reasons
    //Adds a reason object to the Database
    [HttpPost]
    public async Task<ActionResult> AddReason(ReasonDto reason){
        var reasontoAdd = MapDtoToReason(reason); //Maps the Dto from the parameter to a Reason Object
        await _context.AddAsync(reasontoAdd); //Adds the Reason to the Database
        await _context.SaveChangesAsync(); //Saves Changes
        return Ok("Reason Successfully Added"); //Returns a 200 Status Code with a success message
    }


    //Maps A Reason Object to a ReasonDto Object
    //Takes a Reason Object as a parameter
    //Returns A ReasonDto
    private ReasonDto MapReasonToDto(Reason reason){ 
        return new ReasonDto(){
            Id = reason.Id,
            Color = reason.Color,
            Content = reason.Content,
            DateCreated = reason.DateCreated
        };
    }

    //Maps A ReasonDto Object to a Reason Object
    //Takes a ReasonDto Object as a parameter
    //Returns A Reason
    private Reason MapDtoToReason(ReasonDto reason){
        return new Reason(){
            Color = reason.Color,
            Content = reason.Content,
            DateCreated = reason.DateCreated
        };
    }
  }
}