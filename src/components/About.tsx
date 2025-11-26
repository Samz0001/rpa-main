import { Bot, Zap, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Bot,
      title: 'UiPath Studio',
      description: 'Expert in developing complex automation workflows and reusable components',
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'End-to-end automation of business processes with high accuracy',
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Following industry standards and REFramework for scalable solutions',
    },
    {
      icon: TrendingUp,
      title: 'Optimization',
      description: 'Performance tuning and optimization for maximum efficiency',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Passionate RPA developer with expertise in creating intelligent automation solutions
            that transform business operations and deliver measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-slate-600">{skill.description}</p>
              </div>
            );
          })}
        </div>

        {/* <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-blue-100">Hours Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
