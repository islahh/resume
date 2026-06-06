export default function ExperienceItem({
  title,
  company,
  date,
  points
}: {
  title: string;
  company: string;
  date: string;
  points: string[];
}) {
  return (
    <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 relative">
    <div className="absolute w-3 h-3 bg-slate-800 dark:bg-slate-200 rounded-full -left-[7px] top-2" />
    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{title}</h3>
    <div className="flex justify-between items-baseline mb-2">
        <p className="text-slate-600 dark:text-slate-400">{company}</p>
        <p className="text-sm text-slate-500 dark:text-slate-500">{date}</p>
    </div>
    <ul className="list-disc list-inside space-y-2">
        {points.map((point, index) => (
        <li key={index} className="text-slate-700 dark:text-slate-300">{point}</li>
        ))}
    </ul>
    </div>
  );
}