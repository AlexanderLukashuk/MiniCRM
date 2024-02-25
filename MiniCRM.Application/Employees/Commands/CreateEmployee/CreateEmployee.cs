using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using MiniCRM.Application.Common.Interfaces;
using MiniCRM.Domain.Entities;

namespace MiniCRM.Application.Employees.Commands.CreateEmployee
{
    public record CreateEmployeeCommand : IRequest<int>
    {
        public string? FullName { get; init; }
        
        public string? Position { get; init; }
    }

    public class CreateEmployeeCommandHandler : IRequestHandler<CreateEmployeeCommand, int>
    {
        private readonly IApplicationDbContext _context;

        public CreateEmployeeCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateEmployeeCommand request, CancellationToken cancellationToken)
        {
            var entity = new EmployeeEntity();

            entity.FullName = request.FullName;

            entity.Position = request.Position;

            _context.Employees.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.Id;
        }
    }
}