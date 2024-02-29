using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using MiniCRM.Application.Common.Interfaces;

namespace MiniCRM.Application.Employees.Commands.PurgeEmployees
{
    public record PurgeEmployeeCommand : IRequest;

    public class PurgeEmployeesCommandHandler : IRequestHandler<PurgeEmployeeCommand>
    {
        private readonly IApplicationDbContext _context;

        public PurgeEmployeesCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Handle(PurgeEmployeeCommand request, CancellationToken cancellationToken)
        {
            _context.Employees.RemoveRange(_context.Employees);

            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}