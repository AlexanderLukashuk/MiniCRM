using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using MiniCRM.Application.Common.Interfaces;

namespace MiniCRM.Application.Employees.Commands.UpdateEmployee
{
    public class UpdateEmployeeCommandValidator : AbstractValidator<UpdateEmployeeCommand>
    {
        private readonly IApplicationDbContext _context;

        public UpdateEmployeeCommandValidator(IApplicationDbContext context)
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

        public async Task<bool> BeUniqueFullname(UpdateEmployeeCommand model, string fullname, CancellationToken cancellationToken)
        {
            return await _context.Employees
                .Where(e => e.Id != model.Id)
                .AllAsync(e => e.FullName != fullname, cancellationToken);
        }
    }
}