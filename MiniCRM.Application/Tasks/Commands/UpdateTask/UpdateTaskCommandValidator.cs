using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;

namespace MiniCRM.Application.Tasks.Commands.UpdateTask
{
    public class UpdateTaskCommandValidator : AbstractValidator<UpdateTaskCommand>
    {
        public UpdateTaskCommandValidator()
        {
            RuleFor(v => v.Title)
                .MaximumLength(200)
                .NotEmpty();
        }
    }
}