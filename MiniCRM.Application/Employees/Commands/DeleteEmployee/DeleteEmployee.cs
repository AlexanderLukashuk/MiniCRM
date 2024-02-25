using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ardalis.GuardClauses;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MiniCRM.Application.Common.Interfaces;

namespace MiniCRM.Application.Employees.Commands.DeleteEmployee
{
    public record DeleteEmployeeCommand(int Id) : IRequest;

    public class DeleteEmployeeCommandhandler : IRequestHandler<DeleteEmployeeCommand>
    {
        private readonly IApplicationDbContext _context;

        public DeleteEmployeeCommandhandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Handle(DeleteEmployeeCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Employees
                .Where(e => e.Id == request.Id)
                .SingleOrDefaultAsync(cancellationToken);

            Guard.Against.NotFound(request.Id, entity);

            _context.Employees.Remove(entity);

            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}