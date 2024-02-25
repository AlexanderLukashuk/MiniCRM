using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using MiniCRM.Application.Common.Interfaces;

namespace MiniCRM.Application.Employees.Commands.CreateEmployee
{
    public class CreateEmployeeCommandValidator : AbstractValidator<CreateEmployeeCommand>
    {
        private readonly IApplicationDbContext _context;

        public CreateEmployeeCommandValidator(IApplicationDbContext context)
        {
            _context = context;

            RuleFor(v => v.FullName)
                .NotEmpty()
                .MaximumLength(100)
                .MustAsync(BeUniqueFullname)
                    .WithMessage("'{PropertyName}' must be unique.")
                    .WithErrorCode("Unique");

            RuleFor(v => v.Position)
                .NotEmpty()
                .MaximumLength(100);
        }

        public async Task<bool> BeUniqueFullname(string fullname, CancellationToken cancellationToken)
        {
            return await _context.Employees
                .AllAsync(e => e.FullName != fullname, cancellationToken);
        }
    }
}