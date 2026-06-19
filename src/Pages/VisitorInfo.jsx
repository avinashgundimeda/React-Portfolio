import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VisitorInfo = () => {
  const [visitorHistory, setVisitorHistory] = useState([]);
  const [totalVisits, setTotalVisits] = useState(0);
  const [uniqueIps, setUniqueIps] = useState(0);
  const [lastVisitTime, setLastVisitTime] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        let currentIp = "Unknown";
        try {
          const response = await fetch("https://ipapi.co/json/");
          const data = await response.json();
          if (data && data.ip) {
            currentIp = data.ip;
          }
        } catch (error) {
          console.error("Error fetching IP:", error);
          // Fallback to a mock IP if fetch fails
          currentIp = "127.0.0.1";
        }

        const now = new Date().toLocaleString("en-GB"); // Format similar to screenshot
        
        // Retrieve existing visitors from local storage to simulate a database
        const storedHistory = JSON.parse(localStorage.getItem("visitorAnalytics")) || [];
        
        let existingVisitor = storedHistory.find(v => v.ip === currentIp);
        
        if (existingVisitor) {
          existingVisitor.hits += 1;
          existingVisitor.lastSeen = now;
        } else {
          storedHistory.push({
            ip: currentIp,
            hits: 1,
            firstSeen: now,
            lastSeen: now
          });
        }
        
        localStorage.setItem("visitorAnalytics", JSON.stringify(storedHistory));
        
        // Calculate totals
        const totalHits = storedHistory.reduce((acc, curr) => acc + curr.hits, 0);
        
        // Sort history by lastSeen descending (roughly)
        const sortedHistory = [...storedHistory].reverse();
        
        setVisitorHistory(sortedHistory);
        setTotalVisits(totalHits);
        setUniqueIps(storedHistory.length);
        setLastVisitTime(now);
      } catch (error) {
        console.error("Error tracking visitor:", error);
      } finally {
        setLoading(false);
      }
    };

    trackVisitor();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] py-20 px-6 sm:px-12 md:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold uppercase mb-2">
            Visitor <span className="text-teal-600 dark:text-teal-400">Analytics</span>
          </h1>
          <p className="text-[var(--text-muted)] mb-4">
            Real-time traffic analysis and client visitor metrics for the CV/ML laboratory platform.
          </p>
          <span className="inline-block border border-teal-600 text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
            Traffic Monitoring System
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--border-soft)] shadow-sm">
                <h3 className="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">Total Page Visits</h3>
                <p className="text-3xl font-bold">{totalVisits}</p>
              </div>
              <div className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--border-soft)] shadow-sm">
                <h3 className="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">Unique Client IPs</h3>
                <p className="text-3xl font-bold">{uniqueIps}</p>
              </div>
              <div className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--border-soft)] shadow-sm">
                <h3 className="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">Last Visit Time</h3>
                <p className="text-lg font-medium mt-1">{lastVisitTime}</p>
              </div>
            </div>

            {/* Table Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold uppercase">Recent Client Visits</h2>
                <span className="text-sm text-[var(--text-muted)]">{uniqueIps} clients logged</span>
              </div>
              
              <div className="overflow-x-auto bg-[var(--bg-surface)] rounded-lg border border-[var(--border-soft)] shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-soft)]">
                      <th className="p-4 text-sm font-semibold uppercase text-[var(--text-muted)]">IP Address</th>
                      <th className="p-4 text-sm font-semibold uppercase text-[var(--text-muted)]">Total Hits</th>
                      <th className="p-4 text-sm font-semibold uppercase text-[var(--text-muted)]">First Seen</th>
                      <th className="p-4 text-sm font-semibold uppercase text-[var(--text-muted)]">Last Seen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visitorHistory.map((visitor, index) => (
                      <tr key={index} className="border-b border-[var(--border-soft)] last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="p-4 font-mono text-sm">{visitor.ip}</td>
                        <td className="p-4">{visitor.hits}</td>
                        <td className="p-4 text-sm text-[var(--text-muted)]">{visitor.firstSeen}</td>
                        <td className="p-4 text-sm text-[var(--text-muted)]">{visitor.lastSeen}</td>
                      </tr>
                    ))}
                    {visitorHistory.length === 0 && (
                      <tr>
                        <td colSpan="4" className="p-8 text-center text-[var(--text-muted)]">
                          No visitor data recorded yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Back Button */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded transition-colors font-medium text-sm"
            >
              <i className="bx bx-chevron-left text-lg"></i> Back to Dashboard
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default VisitorInfo;
