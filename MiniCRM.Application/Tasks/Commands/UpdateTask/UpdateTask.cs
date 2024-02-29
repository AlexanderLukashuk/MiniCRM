using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ardalis.GuardClauses;
using MediatR;
using MiniCRM.Application.Common.Interfaces;

namespace MiniCRM.Application.Tasks.Commands.UpdateTask
{
    public record UpdateTaskCommand : IRequest
    {
        public int Id { get; init; }

        public string? Title { get; init; }

        public string? Description { get; init; }

        public int CompletionPercentage { get; init; }
    }

    public class UpdateTaskCommandHandler : IRequestHandler<UpdateTaskCommand>
    {
        private readonly IApplicationDbContext _context;

        public UpdateTaskCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Handle(UpdateTaskCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Tasks
                .FindAsync(new object[] { request.Id }, cancellationToken);

            Guard.Against.NotFound(request.Id, entity);

            entity.Title = request.Title;
            entity.Description = request.Description;
            entity.CompletionPercentage = request.CompletionPercentage;

            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}