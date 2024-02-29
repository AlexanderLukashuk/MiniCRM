using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ardalis.GuardClauses;
using MediatR;
using MiniCRM.Application.Common.Interfaces;

namespace MiniCRM.Application.Tasks.Commands.DeleteTask
{
    public record DeleteTaskCommand(int Id) : IRequest;

    public class DeleteTaskCommandHandler : IRequestHandler<DeleteTaskCommand>
    {
        private readonly IApplicationDbContext _context;

        public DeleteTaskCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Handle(DeleteTaskCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Tasks
                .FindAsync(new object[] { request.Id }, cancellationToken);

            Guard.Against.NotFound(request.Id, entity);

            _context.Tasks.Remove(entity);

            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}