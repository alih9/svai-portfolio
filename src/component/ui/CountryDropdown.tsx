'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { countries } from '@/utils/countries';
import { Icon } from '@iconify/react';

interface CountryDropdownProps {
  name?: string;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const CountryDropdown: React.FC<CountryDropdownProps> = ({
  name,
  value,
  onChange,
  placeholder = "Select country",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (country: string) => {
    onChange(country);
    setIsOpen(false);
    setSearchQuery("");
    setActiveIndex(-1);
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === "ArrowDown" || e.key === " ") {
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => (prev < filteredCountries.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < filteredCountries.length) {
          handleSelect(filteredCountries[activeIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setActiveIndex(-1);
        break;
      case "Tab":
        setIsOpen(false);
        break;
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const activeItem = listRef.current.children[activeIndex + 1] as HTMLElement; // +1 because of search input li
      if (activeItem) {
        activeItem.scrollIntoView({ block: "nearest" });
      }
    }
  }, [activeIndex]);

  return (
    <div className={`relative w-full ${className}`} ref={containerRef} onKeyDown={handleKeyDown}>
      {/* Toggle Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-4 px-5 pe-12 flex text-nowrap w-full cursor-pointer bg-gray-50 border border-gray-200 rounded-2xl text-start text-sm focus:border-primary focus:ring-primary focus:bg-white transition-all text-gray-800"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={!value ? "text-gray-500" : ""}>
          {value || placeholder}
        </span>
        <span className="absolute top-1/2 end-4 -translate-y-1/2">
          <Icon 
            icon="lucide:chevron-down" 
            className={`text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
          />
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          ref={listRef}
          className="absolute mt-2 max-h-72 w-full z-[100] bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
          role="listbox"
        >
          {/* Search Input */}
          <li className="sticky top-0 bg-white p-2 border-b border-gray-100 z-10">
            <div className="relative">
              <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search country..."
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setActiveIndex(-1);
                }}
                className="block w-full text-sm border-gray-100 bg-gray-50 rounded-xl focus:border-primary focus:ring-primary py-2.5 pl-10 pr-4 outline-none transition-all"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </li>

          {/* Country Options */}
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <li
                key={country}
                role="option"
                aria-selected={value === country}
                onClick={() => handleSelect(country)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`py-2.5 px-4 text-sm cursor-pointer transition-colors flex items-center justify-between ${
                  activeIndex === index || value === country
                    ? "bg-gray-100 text-primary font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className='w-full'>{country}</span>
                {value === country && (
                  <Icon icon="lucide:check" className="text-primary" />
                )}
              </li>
            ))
          ) : (
            <li className="py-8 px-4 text-center text-sm text-gray-500">
              No countries found.
            </li>
          )}
        </ul>
      )}
      {/* Hidden input for form submission */}
      {name && <input type="hidden" name={name} value={value || ''} />}
    </div>
  );
};

export default CountryDropdown;
