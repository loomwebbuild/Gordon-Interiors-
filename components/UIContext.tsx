'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProjectItem } from '@/lib/data';

interface UIContextType {
  quoteModalOpen: boolean;
  openQuoteModal: (preset?: { product?: string; shade?: string; area?: string }) => void;
  closeQuoteModal: () => void;
  quotePreset: { product?: string; shade?: string; area?: string };

  sampleModalOpen: boolean;
  openSampleModal: (preset?: { product?: string; finishName?: string }) => void;
  closeSampleModal: () => void;
  samplePreset: { product?: string; finishName?: string };

  catalogueModalOpen: boolean;
  openCatalogueModal: () => void;
  closeCatalogueModal: () => void;

  lightboxOpen: boolean;
  activeProject: ProjectItem | null;
  openLightbox: (project: ProjectItem) => void;
  closeLightbox: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePreset, setQuotePreset] = useState<{ product?: string; shade?: string; area?: string }>({});

  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [samplePreset, setSamplePreset] = useState<{ product?: string; finishName?: string }>({});

  const [catalogueModalOpen, setCatalogueModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const openQuoteModal = (preset = {}) => {
    setQuotePreset(preset);
    setQuoteModalOpen(true);
  };

  const closeQuoteModal = () => setQuoteModalOpen(false);

  const openSampleModal = (preset = {}) => {
    setSamplePreset(preset);
    setSampleModalOpen(true);
  };

  const closeSampleModal = () => setSampleModalOpen(false);

  const openCatalogueModal = () => setCatalogueModalOpen(true);
  const closeCatalogueModal = () => setCatalogueModalOpen(false);

  const openLightbox = (project: ProjectItem) => {
    setActiveProject(project);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveProject(null);
  };

  return (
    <UIContext.Provider
      value={{
        quoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        quotePreset,
        sampleModalOpen,
        openSampleModal,
        closeSampleModal,
        samplePreset,
        catalogueModalOpen,
        openCatalogueModal,
        closeCatalogueModal,
        lightboxOpen,
        activeProject,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
