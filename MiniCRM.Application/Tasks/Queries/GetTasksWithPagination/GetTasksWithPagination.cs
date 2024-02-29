using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using MiniCRM.Application.Common.Interfaces;
using MiniCRM.Application.Common.Mappings;
using MiniCRM.Application.Common.Models;

namespace MiniCRM.Application.Tasks.Queries.GetTasksWithPagination
{
    public record GetTasksWithPaginationQuery : IRequest<PaginatedList<TaskBriefDto>>
    {
        public int EmployeeId { get; init; }

        public int PageNumber { get; init; } = 1;

        public int PageSize { get; init; } = 10;
    }

    public class GetTasksWithPaginationQueryHandler : IRequestHandler<GetTasksWithPaginationQuery, PaginatedList<TaskBriefDto>>
    {
        private readonly IApplicationDbContext _context;

        private readonly IMapper _mapper;

        public GetTasksWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<PaginatedList<TaskBriefDto>> Handle(GetTasksWithPaginationQuery request, CancellationToken cancellationToken)
        {
            return await _context.Tasks
                .Where(x => x.EmployeeId == request.EmployeeId)
                .OrderBy(x => x.Title)
                .ProjectTo<TaskBriefDto>(_mapper.ConfigurationProvider)
                .PaginatedListAsync(request.PageNumber, request.PageSize);
        }
    }
}