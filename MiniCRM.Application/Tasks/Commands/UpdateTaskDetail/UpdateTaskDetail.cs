using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ardalis.GuardClauses;
using MediatR;
using MiniCRM.Application.Common.Interfaces;
using MiniCRM.Domain.Enums;

namespace MiniCRM.Application.Tasks.Commands.UpdateTaskDetail
{
    public record UpdateTaskDetailCommand : IRequest
    {
        public int Id { get; init; }

        public int EmployeeId { get; init; }

        public PriorityLevel Priority { get; init; }

        public DateTime StartDate { get; init; }

        public DateTime Deadline { get; init; }
    }

    public class UpdateTaskDetailCommandHandler : IRequestHandler<UpdateTaskDetailCommand>
    {
        private readonly IApplicationDbContext _context;

        public UpdateTaskDetailCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Handle(UpdateTaskDetailCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Tasks
                .FindAsync(new object[] { request.Id }, cancellationToken);

            Guard.Against.NotFound(request.Id, entity);

            entity.EmployeeId = request.EmployeeId;
            entity.StartDate = request.StartDate;
            entity.Deadline = request.Deadline;

            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}