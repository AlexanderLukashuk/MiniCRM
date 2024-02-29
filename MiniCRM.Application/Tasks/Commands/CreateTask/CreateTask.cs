using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using MiniCRM.Application.Common.Interfaces;
using MiniCRM.Domain.Entities;

namespace MiniCRM.Application.Tasks.Commands.CreateTask
{
    public record CreateTaskCommand : IRequest<int>
    {
        public int EmployeeId { get; init; }

        public string? Title { get; init; }

        public int CompletionPercentage { get; init; }
    }

    public class CreateTaskCommandHandler : IRequestHandler<CreateTaskCommand, int>
    {
        private readonly IApplicationDbContext _context;

        public CreateTaskCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateTaskCommand request, CancellationToken cancellationToken)
        {
            var entity = new TaskEntity
            {
                EmployeeId = request.EmployeeId,
                Title = request.Title,
                CompletionPercentage = request.CompletionPercentage
            };

            _context.Tasks.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.Id;
        }
    }
}