using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ardalis.GuardClauses;
using MediatR;
using MiniCRM.Application.Common.Interfaces;

namespace MiniCRM.Application.Employees.Commands.UpdateEmployee
{
    public record UpdateEmployeeCommand : IRequest
    {
        public int Id { get; init; }

        public string? FullName { get; init; }

        public string? Position { get; init; }
    }

    public class UpdateEmployeeCommandHandler : IRequestHandler<UpdateEmployeeCommand>
    {
        private readonly IApplicationDbContext _context;

        public UpdateEmployeeCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Handle(UpdateEmployeeCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Employees
                .FindAsync(new object[] { request.Id }, cancellationToken);

            Guard.Against.NotFound(request.Id, entity);

            entity.FullName = request.FullName;
            entity.Position = request.Position;

            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}