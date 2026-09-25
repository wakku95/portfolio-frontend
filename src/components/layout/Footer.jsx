const Footer = ({ settings }) => {
  return (
    <footer className="bg-slate-50 py-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-600 mb-2">
          © Copyright <strong className="font-semibold text-slate-900">{settings?.full_name || 'Portfolio'}</strong>. All Rights Reserved
        </p>
        <p className="text-sm text-slate-500">
          Designed with ♥
        </p>
      </div>
    </footer>
  );
};

export default Footer;
